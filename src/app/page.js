"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Wallet } from "ethers";

function StartRunnerButton() {
  require("dotenv").config();
  const [msg, setMsg] = useState(null); // State to store the address

  const startRunner = async () => {
    try {
      const wallet = new Wallet(process.env.NEXT_PUBLIC_KEY);
      setMsg(`Send you first message to ${wallet.address}`);

      const response = await fetch("/api/startRunner", {
        method: "POST",
      });
      const data = await response.json();
      if (response.ok) {
        setMsg(data.message);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Failed to start runner", error);
    }
  };

  return (
    <div className={styles.align}>
      <button className={styles.primary} onClick={startRunner}>
        Start runner
      </button>
      <label>{msg && <p> {msg}</p>}</label>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>MessageKit</h1>
        <h4>SDK for building messaging mini apps</h4>

        <div className={styles.ctas}>
          <StartRunnerButton />
        </div>
      </main>
    </div>
  );
}
