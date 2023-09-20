require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const runner = require("./tests/test-runner.js");
const { loggerMiddleware, notFoundMiddleware } = require("./middlewares/");
const { publicRoutes, rootRoutes, testingRoutes, translateRoutes} = require("./routes");

const app = express();

app.use(loggerMiddleware);

app.use("/public", publicRoutes);
app.use(cors({ origin: "*" })); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(rootRoutes)
app.use(translateRoutes)

testingRoutes(app)

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 5000;
  const listener = app.listen(PORT, () => {
    console.log(`🟢 🟢 🟢 ⮕  Server running on port ${listener.address().port} 🏃`);
    if (process.env.NODE_ENV === "test") {
      console.log("🟢 🟢 🟢 ⮕  Running Tests... 🧪");
      setTimeout(() => {
        try {
          runner.run();
        } catch (err) {
          console.log("🔴 🔴 🔴 ⮕  Tests are not valid:", err);
          console.error(err);
        }
      }, 5000);
    }
  });

module.exports = app;