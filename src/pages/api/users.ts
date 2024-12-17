import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const getUsers = () => {
    // Query to DB
    return [
      { email: "erdecode@gmail.com", fullName: "Erdecode" },
      { email: "erdecode.studio@gmail.com", fullName: "Erdecode Studio" },
    ];
  };

  const users = getUsers();

  res.json({ users });
}
