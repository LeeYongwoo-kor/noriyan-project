import withHandler from "@libs/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(404).json({ errorMessage: "Not Found API!" });
}

export default withHandler({
  methods: ["GET"],
  handler,
});
