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
];

module.exports = { service, validation };
