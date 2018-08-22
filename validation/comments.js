const isEmpty = require("./is-empty");

module.exports = function validateTextInput(data) {
  let errors = {};
  if (isEmpty(data.text)) {
    errors.text = "Comment field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
