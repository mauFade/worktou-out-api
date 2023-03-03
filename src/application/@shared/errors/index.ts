export interface ErrorInterface extends Error {
  type: string;
  status: number;
  message: string;
}

export class ResourceNotFoundError extends Error {
  public type: string;
  public status: number;
  constructor(message: string) {
    super(message);

    this.name = "NotFoundError";
    this.type = "RESOURCE_NOT_FOUND";
    this.status = 404;
  }
}
