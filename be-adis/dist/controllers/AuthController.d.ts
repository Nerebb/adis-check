import { Request, Response } from "express";
declare class AuthController {
    static register: (req: Request, res: Response) => Promise<void>;
    static login: (req: Request, res: Response) => Promise<void>;
    static changePassword: (req: Request, res: Response) => Promise<void>;
}
export default AuthController;
