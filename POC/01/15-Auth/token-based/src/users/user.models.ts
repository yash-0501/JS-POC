import { Schema, model } from "mongoose";
import { UserType } from "./users.zodSchema";
import { Roles } from "./user.roles";

const userSchema = new Schema<UserType>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: Roles, required: true, default:Roles.Normal},
})

const User = model('user_model', userSchema);

export {
    User,
};