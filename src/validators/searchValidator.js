import Joi from "joi";

const searchValidator = Joi.object({
    searchWords: Joi.string().min(2).required()
});

export {searchValidator}

// regex(/([a-z]{2})-([A-Z]{2})/)