const { DataTypes } = require("sequelize");
const { sequelize } = require("../Config/db");
const { UserModel } = require("./UserModel");


const PostModel = sequelize.define("Post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: "posts"
})



module.exports = {
    PostModel
}
