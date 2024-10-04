"use client";
import Image from "next/image";
import styles from "./page.module.css";

function StartRunnerButton() {
  const startRunner = async () => {
    try {
      const response = await fetch("/api/startRunner", {
        method: "POST",
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Failed to start runner", error);
    }
  };

  return (
    <button className={styles.primary} onClick={startRunner}>
      <Image
        className={styles.logo}
        src="https://nextjs.org/icons/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Start runner
    </button>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <StartRunnerButton /> {/* Use the new Client Component here */}
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        {/* ... existing footer code ... */}
      </footer>
    </div>
  );
}
