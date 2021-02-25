import { Request, Response } from "express";

export class UserController {
  async create(request: Request, response: Response) {
    const body = request.body;

    return response.send();
  }
}
