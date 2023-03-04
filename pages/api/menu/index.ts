import menu from "@data/menu";
import withHandler from "@libs/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { sub } = req.query;

  if (!sub) {
    return res.status(200).json(menu);
  }

  const menuBySub = menu.filter((data) => data?.sub === sub);
  return res.status(200).json(menuBySub);
}

export default withHandler({
  methods: ["GET"],
  handler,
});
