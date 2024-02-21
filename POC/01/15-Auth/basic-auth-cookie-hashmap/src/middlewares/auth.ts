import { NextFunction, Request, Response } from "express";
import { getUser } from "../service/auth";
import { UserType } from "../users/users.zodSchema"


async function isLoggedIn(req:Request, res:Response, next:NextFunction) {
    const userUid:string = req.cookies.uid

    if(!userUid) return res.redirect("user/login")

    const user = getUser(userUid);
    if(!user) return res.redirect("user/login");

    (req as any).user = user
    next()
}

export {
    isLoggedIn
}