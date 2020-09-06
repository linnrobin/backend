const { Property, User } = require("../models");

class Controller {
  static findAll(req, res, next) {
    Property.findAll()
      .then((result) => {
        return res.status(200).json({ result });
      })
      .catch((err) => {
        return next(err);
      });
  }
  static findOne(req, res, next) {
    let { id } = req.params;
    Property.findOne({
      where: {
        id,
      },
      include: [User],
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
            errors: [{ message: "User Not Found " }],
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
  }
}

module.exports = Controller;
