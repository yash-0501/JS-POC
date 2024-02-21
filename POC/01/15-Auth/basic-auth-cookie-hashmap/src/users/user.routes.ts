import { Router } from "express";
import { handleGetUsers, handleUserLogin, handleUserSignup } from "./user.controllers";

const router = Router();

router.route('/').get(handleGetUsers).post(handleUserSignup)
router.route('/login').post(handleUserLogin)

export {
    router,
}