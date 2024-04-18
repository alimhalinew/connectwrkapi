const ErrorHandler = (err, req, res, next) => {
  console.log("Middleware Error handling");
  console.log(req.url);
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";

  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "DEV" ? err.stack : {},
  });
};

module.exports = ErrorHandler;
