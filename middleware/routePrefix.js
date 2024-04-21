// middleware/routePrefix.js
function routePrefix(req, res, next) {
  req.url = "/api" + req.url;
  next();
}

module.exports = routePrefix;
