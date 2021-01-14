"use strict";

var Joi = require("@hapi/joi");

var registerValidation = function registerValidation(data) {
  var schema = Joi.object({
    firstname: Joi.string().min(4).max(16).required(),
    lastname: Joi.string().min(4).max(16).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required()
  });
  return schema.validate(data);
};

var loginValidation = function loginValidation(data) {
  var schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;