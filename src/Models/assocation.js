const { PostModel } = require("./PostModel");
const { ProjectModel } = require("./ProjectModel");
const { UserModel } = require("./UserModel");


UserModel.hasMany(PostModel, {
    foreignKey: "userId",
    as: "posts"
})


PostModel.belongsTo(UserModel, {
    foreignKey: "userId",
    as: "user"
})

UserModel.belongsToMany(ProjectModel, {
    through: "UserProjects"
})

ProjectModel.belongsToMany(UserModel,{
    through : "UserProjects"
})