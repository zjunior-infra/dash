import { NextApiResponse } from "next";

export default function handler(req:NextApiResponse, res:NextApiResponse) {
  return res.status(200).json({ name: 'John Doe' })
  }