import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const getGreetings = () => {
    // Query to DB
    return "This is the `greetings` field of the root `Query` type";
  };

  const greetings = getGreetings();

  res.json({ greetings });
}
