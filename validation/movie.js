const isEmpty = require("./is-empty");

module.exports = function validateMovieInput(data) {
  let errors = {};
  if (isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
