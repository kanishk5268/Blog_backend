const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const session = require('express-session')
const MongoStore = require("connect-mongo");

const connectDB = require("./server/config/connectdb");

const app = express();
const PORT = 3000 || process.env.PORT;

//connect to db
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "hello",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
    }),
  })
);

app.use(express.static("public"));

//Templateing Engine

app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));

app.listen(PORT, (req, res) => {
  console.log(`App is listening on port: ${PORT}`);
});
