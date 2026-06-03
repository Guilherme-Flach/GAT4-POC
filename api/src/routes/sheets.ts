import { Router, Request, Response } from "express";

import { getSheetData } from "../services/sheets";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const sheetName = "STD_Sheet";
    // typeof req.query.sheet === "string" ? req.query.sheet : undefined;
    const data = await getSheetData(sheetName);

    res.status(200).json({ data });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch sheet data. ERROR: " + error });
  }
});

export default router;
