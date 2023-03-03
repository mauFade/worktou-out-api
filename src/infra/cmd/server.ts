import "reflect-metadata";

import { AppLogger } from "@application/@shared/logger";
import { ExpressServer } from "@infra/express";

const logger = AppLogger.init();

const PORT = Number(process.env.PORT) || 33333;
const httpServer = new ExpressServer(PORT, logger);

httpServer.start();
