const { body, validationResult } = require("express-validator");

const validateUserInput = () => [
  body("email").isEmail().withMessage("Provide a Valid Email"),
 
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 char long"),
  body("password").notEmpty().withMessage("Password field cannot be empty"),
  
];

const validate = (request, response, next) => {
  const errors = validationResult(request);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return response.status(422).json({
    status: 422,
    error: extractedErrors,
  });
};

module.exports = {
  validateUserInput,
  validate,
};
