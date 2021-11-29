const { Users } = require("../../../models");
const { body } = require("express-validator");

const service = async function (req, res, next) {
  try {
    const data = req.body;
    const requestDB = await Users.create(data);
    return res.json({ msg: "Registrasi berhasil", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

const validation = [
  body("name", "address", "phone", "gender", "email", "password")
    .notEmpty()
    .withMessage("data harus terisi semua"),
  body("phone")
    .isLength({ minLength: 10, maxLength: 12 })
    .withMessage("must be at least 5 chars long"),
  body("email").isEmail().normalizeEmail(),
  //   body("email").custom((value) => {
  //     return Users.findUserByEmail(value).then((user) => {
  //       if (user) {
  //         return Promise.reject("E-mail already in use");
  //       }
  //     });
  //   }),
  body("password").isLength({
    minLength: 8,
  }),
];

module.exports = { service, validation };
