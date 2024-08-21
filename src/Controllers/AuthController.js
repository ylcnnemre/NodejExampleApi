const { Op } = require("sequelize")
const { SuccessResponseDto } = require("../Dto/SuccessResponseDto")
const { UserModel, PostModel } = require("../Models")


const RegisterController = async (req, res) => {
    const user = await UserModel.create({
        username: "emre",
        email: "emre@gmail.com",
        password: "12345"
    })

    return res.status(201).send(new SuccessResponseDto("Kayıt başarılı", user))
}

const GetAllController = async (req, res) => {
    const users = await UserModel.findAll({
        include: [
            {
                model: PostModel,
                as: "posts",
            }
        ],
        attributes: {
            exclude: ["password"]
        }
    })

    return res.status(200).send(new SuccessResponseDto("Başarılı", users))
}

module.exports = {
    RegisterController,
    GetAllController
}