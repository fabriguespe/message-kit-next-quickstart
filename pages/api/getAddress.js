import { Wallet } from "ethers";

export default function handler(req, res) {
  const wallet = new Wallet(process.env.KEY);
  console.log(wallet.address);
  res.status(200).json({ address: wallet.address });
}
