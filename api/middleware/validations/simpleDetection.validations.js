const Joi = require("joi");
const { validation } = require("../../constants/statusCodes");

const validateAddRecord = (req, res, next) => {
  console.log(req);
  const schema = Joi.object({
    username: Joi.string().required(),
    round: Joi.number().required(),
    reactionTime: Joi.number().required(),
    type: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.json({
      statusCode: validation,
      error: error.details[0].message,
    });
  }
  return next();
};

module.exports = {
  validateAddRecord,
};
