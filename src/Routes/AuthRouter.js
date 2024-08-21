const express = require("express")
const { RegisterController, GetAllController } = require("../Controllers/AuthController")

const authRouter = express.Router()


authRouter.post("/register", RegisterController)
authRouter.get("/all",GetAllController)

module.exports={
    authRouter
}