const { Users } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.auth) {
      where.id = req.auth.id;
    } else {
      const requestDB = await Users.findAll({
        where,
        attributes: {
          exclude: [
            "id",
            "address",
            "email",
            "password",
            "createdAt",
            "updatedAt",
          ],
        },
      });
      return res.json({ msg: "data semua user", data: requestDB });
    }

    const requestDB = await Users.findAll({
      where,
      attributes: {
        exclude: [
          "id",
          "address",
          "email",
          "password",
          "createdAt",
          "updatedAt",
        ],
      },
      // include: {
      //   model: Classes,
      //   attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      // },
    });
    return res.json({
      msg: "data user berhasil diterima.",
      data: requestDB[0],
    });

    // else {
    //   if (requestDB.length < 1) {
    //     return res.status(404).json({ msg: "User tidak ditemukan" });
    //   } else {

    //   }
    // }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
