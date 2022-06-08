const logger = require("../utils/logger");

exports.errorHandler = (err, req, res, next) => {
  logger.error(new Error("render error"), error.toString());
  res.status(500).json("Something went wrong!");
};
