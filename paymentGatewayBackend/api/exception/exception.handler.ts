import { NextFunction, Request, Response } from "express";
import { ResponseModel } from "../model/response.model";

export class ExceptionHandler {

    internalError(ftn: (request: Request, response: Response) => Promise<any>) {
        return (request: Request, response: Response, next: NextFunction) => {
            return ftn(request, response).catch((error: any) => {
                next(new ResponseModel().internalErrorResponse);
            });
        }
    }

    notAllowedMethods(request: Request, response: Response, next: NextFunction) {
        const allowedMethods = ["get", "post", "put", "delete", "options"]

        if (allowedMethods.indexOf(request.method.toLowerCase()) == -1) {
            return next(new ResponseModel().notAllowedMethodsResponse);
        }
        next();
    }

    pageNotFound(request: Request, response: Response, next: NextFunction) {
        next(new ResponseModel().pageNotFoundResponse);
    }

    generalException(error: any, request: Request, response: Response, next: NextFunction) {
        const errorData = {
            message: error.message,
            status: error.status,
            stack: error.stack
        }

        response
            .status(error.status)
            .json(errorData)
    }
}