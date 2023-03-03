import "express-async-errors";
import express from "express";
import winston from "winston";
import { createServer, Server } from "http";
import cors from "cors";

export class ExpressServer {
  private express: express.Express;
  private server: Server;
  private port: number;
  private logger: winston.Logger;

  constructor(port: number, logger: winston.Logger) {
    this.port = port;
    this.logger = logger;
    this.express = express();
    this.server = createServer(this.express);

    this.validate();
    this.config();
  }

  get _server(): Server {
    return this.server;
  }

  private validate(): void {
    if (this.port < 1000 || this.port > 65535) {
      throw new Error("Invalid port number");
    }
  }

  private config(): void {
    this.express.use(
      cors({
        origin: "*",
      })
    );
    this.express.use(express.json());
    this.express.use(express.urlencoded());
  }
}
