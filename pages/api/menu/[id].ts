import { NextApiRequest, NextApiResponse } from "next";
import menu from "../../../data/menu";
import withHandler from "../../../libs/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id) {
    return res.status(200).json(menu);
  }
  const menuById = menu.find((data) => data.id === +id);
  if (!menuById) {
    return res.status(404).json({ error: "No such Id found." });
  }
  return res.status(200).json(menuById);
}

export default withHandler({
  methods: ["GET"],
  handler,
});
