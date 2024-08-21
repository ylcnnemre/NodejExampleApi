const { CustomError } = require("./CustomError");


class NotFoundException extends CustomError {
    constructor(message = "Resource not founc") {
        super(message, 404)
    }
}

module.exports = {
    NotFoundException
}