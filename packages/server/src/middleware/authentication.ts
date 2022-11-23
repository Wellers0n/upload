import { Request, Response, NextFunction } from 'express'
import jwt from "jsonwebtoken";

export const authentication = async (request: Request, response: Response, next: NextFunction) => {
    const authorization = request?.headers?.authorization;

    if (authorization) {
        jwt.verify(authorization, 'batman', (err, decoded) => {
            if (err) {
                return response.status(401).json({
                    message: 'Token not found, Not authorized!',
                    error: true,
                });
            }

            // AUTHORIZATION OK!
            next();
        })
    } else {
        return response.status(401).json({
            message: 'Not authorized!',
            error: true,
        });
    }
}