require("express-async-errors")
const express = require("express")
const { SuccessResponseDto } = require("./Dto/SuccessResponseDto")
require("./Models/index")
require("./Models/assocation")
const { testConnection, syncDatabase } = require("./Config/db")
const { CustomError } = require("./Exceptions/CustomError")
const { NotFoundException } = require("./Exceptions/NotFoundException")
const { authRouter } = require("./Routes/AuthRouter")
const { UserModel } = require("./Models/UserModel")
const { ProjectModel } = require("./Models/ProjectModel")

const app = express()


app.get("/", async (req, res) => {
    const user = await UserModel.create({ username: 'John Doe', email: "em@gmail.com", password: "qasdx" });
    const project = await ProjectModel.create({ title: 'Project A' });
    await user.addProject(project)

    return res.send("kayıt tamam")
})


app.use((err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            message: err.message,
            isOperational: err.isOperational
        })
    }
    console.log("err => ", err.message)
    console.log("err => ",err.errors)
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message
    });
})

app.use("/api/auth", authRouter)



app.listen(3000, async () => {
    await testConnection()
    await syncDatabase()
    console.log("server is running")
})

