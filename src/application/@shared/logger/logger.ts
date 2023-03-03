import winston from "winston";
import { ErrorInterface } from "../errors";

export class AppLogger {
  private logger: winston.Logger;

  static init(): winston.Logger {
    if (this.prototype.logger !== undefined) {
      return this.prototype.logger;
    }

    const logger = winston.createLogger({
      transports: [new winston.transports.Console()],
    });

    this.prototype.logger = logger;
    return logger;
  }

  static info(message: string): void {
    this.prototype.logger.info(message);
  }

  static error(message: string | ErrorInterface, ...meta: any[]): void {
    console.log(message);
    this.prototype.logger.error(message.toString(), meta);
  }

  static warn(message: string, ...meta: any[]): void {
    console.log("\n");
    this.prototype.logger.warn(message, meta);
  }
}
