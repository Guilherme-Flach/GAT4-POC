import { Router, Request, Response } from "express";

import { getStdData } from "../services/getStdData";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const rowCount =
      req.query.rowCount !== undefined
        ? parseInt(req.query.rowCount as string, 10)
        : undefined;
    const data = await getStdData(rowCount);
    res.status(200).json({ data });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch STD data. ERROR: " + error });
  }
});

export default router;
