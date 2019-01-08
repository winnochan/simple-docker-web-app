var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var redis = require("redis");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// for testing docker-compose command
// var redisClient = redis.createClient({
//   host: "redis-server",
//   port: 6379
// });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
