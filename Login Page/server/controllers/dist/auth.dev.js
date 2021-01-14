"use strict";

var User = require("../models/User");

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");

var _require = require("../validation"),
    registerValidation = _require.registerValidation,
    loginValidation = _require.loginValidation;

var register = function register(req, res) {
  var _registerValidation, error, emailExist, salt, hashPassword, user;

  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _registerValidation = registerValidation(req.body), error = _registerValidation.error;

          if (!error) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).send(error.details[0].message));

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 5:
          emailExist = _context.sent;

          if (!emailExist) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(400).send("Email already exist"));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 10:
          salt = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, salt));

        case 13:
          hashPassword = _context.sent;
          user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashPassword
          });
          _context.prev = 15;
          _context.next = 18;
          return regeneratorRuntime.awrap(user.save());

        case 18:
          res.status(201).send({
            user: user._id
          });
          _context.next = 24;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](15);
          res.status(400).send(_context.t0);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[15, 21]]);
};

var login = function login(req, res) {
  var _loginValidation, error, user, validPass, token;

  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _loginValidation = loginValidation(req.body), error = _loginValidation.error;

          if (!error) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(400).send(error.details[0].message));

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 5:
          user = _context2.sent;

          if (user) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(400).send("email or password is wrong"));

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(bcrypt.compare(req.body.password, user.password));

        case 10:
          validPass = _context2.sent;

          if (validPass) {
            _context2.next = 13;
            break;
          }

          return _context2.abrupt("return", res.status(400).send("email or password is wrong"));

        case 13:
          //Password correct and Create and assign tokens
          token = jwt.sign({
            _id: user._id
          }, process.env.TOKEN_SECRET);
          res.header("auth-token", token).send(token);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports.register = register;
module.exports.login = login;