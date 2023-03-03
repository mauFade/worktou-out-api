import { Router } from "express";

const v1Routes = Router();

v1Routes.get("/health-checks", (_, res) => {
  return res.status(200).json("Everything OK");
});

export { v1Routes };
