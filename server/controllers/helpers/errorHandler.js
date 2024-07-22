function errorHandler(err, req, res) {
    if (err.errors) {
        var errorMessages = {};
        for (var fieldName in err.errors) {
            errorMessages[fieldName] = err.errors[fieldName].message;
        }
        return res.status(422).json(errorMessages);
    } else {
        return res.status(500).send("Unknown server error");
    }
}

module.exports = {
    errorHandler
}