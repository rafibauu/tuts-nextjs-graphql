// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createSchema, createYoga } from "graphql-yoga";

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      greetings: String
      users: [User!]
    }

    type User {
      email: String
      fullName: String
    }
  `,
  resolvers: {
    Query: {
      greetings: () => "This is the `greetings` field of the root `Query` type",
      users: () => [
        { email: "erdecode@gmail.com", fullName: "Erdecode" },
        { email: "erdecode.studio@gmail.com", fullName: "Erdecode Studio" },
      ],
    },
  },
});

const yoga = createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await yoga(req, res);
}
