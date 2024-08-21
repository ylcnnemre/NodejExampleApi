const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("mydatabase", "myuser", "mypassword", {
    host: "localhost",
    dialect: "postgres",
    port: 5432
})

async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log("connection successfull")
    }
    catch (err) {
        console.error("unable to connect", err)
    }
    finally {
        /* await sequelize.close() */
    }
}

async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true }); // Tabloyu yeniden oluşturur, veriler silinir!
        console.log("senkronizasyon tamam")
    } catch (error) {
        console.error('Error syncing the database:', error);
    } finally {
        /* await sequelize.close(); */
    }
}

module.exports = {
    sequelize,
    testConnection,
    syncDatabase
}