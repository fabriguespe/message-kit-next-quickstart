import { run } from "@xmtp/message-kit";

let runner;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (!runner) {
        console.log("Starting runner");
        runner = await run(async (context) => {
          const {
            message: {
              typeId,
              content: { content: text },
            },
          } = context;
          if (typeId !== "text") return;

          res.status(200).json({ message: `New message received: ${text}` });
          await context.send("gm");
        });
      } else {
        res.status(200).json({ message: "Runner is already running" });
      }
    } catch (error) {
      console.error("Error starting runner:", error);
      res
        .status(500)
        .json({ error: "Failed to start runner", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
