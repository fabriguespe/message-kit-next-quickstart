import { run } from "@xmtp/message-kit";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await run(async (context) => {
        const { content, sender } = context.message;
        await context.send(`gm`);
      });
      res.status(200).json({ message: "Runner started successfully" });
    } catch (error) {
      console.error("Error starting runner:", error); // Log the error details
      res
        .status(500)
        .json({ error: "Failed to start runner", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
