import { NextApiRequest, NextApiResponse } from "next";
import menu from "../../../data/menu";
import withHandler from "../../../libs/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(menu);
}

export default withHandler({
  methods: ["GET"],
  handler,
});
