import { v1Routes } from "./v1";
import { Router } from "express";
import { ResourceNotFoundError } from "@application/@shared/errors";

const appRoutes = Router();

appRoutes.get("/health-checks", (req, res) => {
  return res.status(200).json({
    success: {
      responseType: "SUCCESS_REQUEST",
      message: "The application is healthy.",
    },
  });
});

appRoutes.use("/v1", v1Routes);

appRoutes.all("*/*", (req, res) => {
  throw new ResourceNotFoundError(
    `Cannot found resource ${req.method} ${req.path}.`
  );
});

export { appRoutes };
