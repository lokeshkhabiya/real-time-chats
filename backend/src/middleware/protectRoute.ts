import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import prisma from "../db/prisma";

interface decodedToken extends JwtPayload {
    userId: string;
}

declare global {
    namespace Express {
        export interface Request {
            user: {
                id: string;
            }
        }
    }
}

const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({error: "Unauthorized - no token provided."});

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as decodedToken;

        if(!decoded) res.status(401).json({error: "Unauthorized - invalid token."});

        const user = await prisma.user.findUnique({where: {id: decoded.userId}, select: {id: true, username: true, fullname: true,
            profilePic: true}});

        if(!user) return res.status(404).json({error: "User not found."});
        
        req.user = user;

        next();
        
    } catch (error: any) {
        console.log("Error while protectRoute middleware.", error.message);
        res.status(500).json({error: "Internal server error."})
    }
}

export default protectRoute;