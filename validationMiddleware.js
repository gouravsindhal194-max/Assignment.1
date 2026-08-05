const { Schema } = require("mongoose");

const validationMiddleware = (schema) => {
    return(req,res,next) =>{
        const {error} = schema.validate(req.body)
        if(error)
        (400).send(error.details[0].message)

        next()
        }
    }
module.exports = validationMiddleware;  