import { Response, NextFunction, Request } from "express";
export declare enum EKeyHeader {
    REFRESH_TOKEN = "x-rtoken-id",
    ACCESS_TOKEN = "x-atoken-id"
}
export declare const catchError: (fun: any) => (req: Request, res: Response, next: NextFunction) => Promise<any>;
