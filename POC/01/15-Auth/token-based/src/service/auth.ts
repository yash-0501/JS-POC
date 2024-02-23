import { UserType } from "../users/users.zodSchema";
import jwt from "jsonwebtoken";
require("dotenv").config();

const secret = process.env.secret || "dhwacfbckquvcueq";

function setUser(user:UserType){
    return jwt.sign({
        email: user.email,
        name: user.name,
        role: user.role
    }, secret);
}

function getUser(token:string){
    if(!token) return null;
    const decodedPayload = jwt.verify(token, secret);
    return decodedPayload;
}

export {
    setUser,
    getUser
}