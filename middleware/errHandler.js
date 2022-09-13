const errHandler = (err, req, res, next) => {
    let code = 500;
    let message = "Internal Server Error";

    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        code = 400
        message = err.errors[0].message
    } else if (err.name === "invalid_token") {
        code = 401
        message = "Invalid token"
    } else if (err.name === "invalid_email/pass") {
        code = 401
        message = "Invalid Email or Password"
    }

    res.status(code).json({ message });
};

module.exports = {
    errHandler,
};