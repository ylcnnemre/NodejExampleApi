const { DataTypes } = require("sequelize");
const { sequelize } = require("../Config/db");

const ProjectModel = sequelize.define('Project', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports={
    ProjectModel
}