import { HttpCode } from "../utils/httpCode";
import { ReasonPhrases } from "../utils/reasonPhrases";
import { Response } from "express";
export declare class AppError extends Error {
    readonly errorType: string;
    readonly httpCode: HttpCode;
    readonly isOperational: boolean;
    constructor(message: string, httpCode: HttpCode, errorType: string);
}
export declare class ForbiddenError extends AppError {
    constructor(message: string, httpCode?: HttpCode, errorType?: ReasonPhrases);
}
export declare class BadRequestError extends AppError {
    constructor(message: string, httpCode?: HttpCode, errorType?: ReasonPhrases);
}
export declare class NotAuthorizedError extends AppError {
    constructor(message: string, httpCode?: HttpCode, errorType?: ReasonPhrases);
}
export declare class DuplicateError extends AppError {
    constructor(message: string, httpCode?: HttpCode, errorType?: ReasonPhrases);
}
export declare class NotFoundError extends AppError {
    constructor(message: string, httpCode?: HttpCode, errorType?: ReasonPhrases);
}
export declare class ServiceUnavailableError extends AppError {
    constructor(message: string, httpCode?: HttpCode, errorType?: ReasonPhrases);
}
interface SendResponse {
    statusCode?: HttpCode;
    success?: boolean;
    data?: object | string | number;
    errors?: string | object;
    message?: string;
}
export declare class SuccessResponse implements SendResponse {
    statusCode: HttpCode;
    success: boolean;
    data: object | string | number;
    errors: string | object;
    message: string;
    constructor(props?: SendResponse);
    send(res: Response, headers?: {}): Response<any, Record<string, any>>;
}
export declare class CreatedResponse extends SuccessResponse {
    constructor({ message, data, statusCode, success, }: {
        message?: string;
        data?: {};
        statusCode?: HttpCode;
        success?: boolean;
    });
}
export declare class NoDataResponse extends SuccessResponse {
    constructor({ message, data, statusCode, success, }: {
        message?: string;
        data?: {};
        statusCode?: HttpCode;
        success?: boolean;
    });
}
export {};
