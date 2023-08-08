import { Request, Response } from "express";
import { BadRequestError, CreatedResponse } from "../helpers/utils";
declare class UserController {
    static register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | CreatedResponse | BadRequestError>;
}
export default UserController;
