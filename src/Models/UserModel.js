const { DataTypes } = require("sequelize")
const { sequelize } = require("../Config/db")
const { PostModel } = require("./PostModel")

const UserModel = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: true,
    updatedAt: true,
    tableName: "user"
})


module.exports = {
    UserModel
}