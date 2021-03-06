const { Type } = require("../models");

class Controller {
  static findAll(req, res, next) {
    Type.findAll()
      .then((result) => {
        return res.status(200).json({ result });
      })
      .catch((err) => {
        return next(err);
      });
  }
  static findOne(req, res, next) {
    let { id } = req.params;
    Type.findOne({
      where: {
        id,
      },
    })
      .then((result) => {
        if (result) {
          return res.status(200).json({
            result,
            message: "Found",
          });
        } else {
          return next({
            name: "NotFound",
            errors: [{ message: "Type Not Found " }],
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
  }
}

module.exports = Controller;
