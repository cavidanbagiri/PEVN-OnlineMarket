
class AppError extends Error{

    constructor(message, statusCode, errorCode = []) {
        super(message);
        this.statusCode = statusCode;
    }    

}

module.exports = AppError;