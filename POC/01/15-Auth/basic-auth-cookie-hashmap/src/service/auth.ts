import { UserType } from "../users/users.zodSchema";

const sessionToUserMap = new Map();

function setUser(id:string, user:UserType){
    sessionToUserMap.set(id,user);
}

function getUser(id:string){
    return sessionToUserMap.get(id);
}

export {
    setUser,
    getUser
}