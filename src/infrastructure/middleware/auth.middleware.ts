import { NextFunction, Request, Response } from "express";

function auth(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        res.setHeader('WWW-Authenticate', 'Basic');
        return res.status(401).json({ success: false, message: "You are not authenticated!" });
    }
    let auth: string[] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    if (user == 'frog-notification' && pass == 'FwZFRyvdGveA') {
        next();
    } else {
        res.setHeader('WWW-Authenticate', 'Basic');
        res.status(401).json({ success: false, message: "You are not authenticated!" });
    }
}

export { auth }