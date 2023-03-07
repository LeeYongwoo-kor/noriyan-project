import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE";

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

export default function withHandler({ methods, handler }: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method && !methods.includes(req.method as method)) {
      return res.status(405).end();
    }
    try {
      await handler(req, res);
    } catch (error) {
      alert(
        "インターネット接続が不安定です。しばらくしてから再度お試しください。 "
      );
      return res.status(500).end();
    }
  };
}
