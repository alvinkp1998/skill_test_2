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
  body("gender")
    .isIn(["laki-laki", "perempuan"])
    .withMessage("Gender hanya laki-laku atau perempuan"),
  body("phone")
    .isLength({
      min: 10,
      max: 13,
    })
    .withMessage("Nomor Telepon minimal 10 angka dan maksimal 13 angka"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .custom((value) => {
      return Users.findOne({ where: { email: value } }).then((data) => {
        if (data) {
          return Promise.reject("Email telah digunakan");
        }
      });
    }),
  ,
  body("password").isLength({ min: 8 }).withMessage("Password minimal 8 huruf"),
];

module.exports = { service, validation };
