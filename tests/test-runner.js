const analyser = require("./assertion-analyser");
const EventEmitter = require("events").EventEmitter;

require("@babel/register");
const Mocha = require("mocha");
const fs = require("fs");
const path = require("path");

const mocha = new Mocha({ timeout: 5000 });
const testDir = "./tests";

// Add each .js file to the mocha instance
fs.readdirSync(testDir)
  .filter(function (file) {
    // Only keep the .js files
    return file.substr(-3) === ".js";
  })
  .forEach(function (file) {
    mocha.addFile(path.join(testDir, file));
  });

let emitter = new EventEmitter();
emitter.run = function () {
  let tests = [];
  let context = "";
  let separator = " -> ";
  // Run the tests.
  try {
    let runner = mocha
      .ui("tdd")
      .run()
      .on("test end", function (test) {
        // remove comments
        let body = test.body.replace(/\/\/.*\n|\/\*.*\*\//g, "");
        // collapse spaces
        body = body.replace(/\s+/g, " ");
        let obj = {
          title: test.title,
          context: context.slice(0, -separator.length),
          state: test.state,
          // body: body,
          assertions: analyser(body),
        };
        tests.push(obj);
      })
      .on("end", function () {
        emitter.report = tests;
        emitter.emit("done", tests);
      })
      .on("suite", function (s) {
        context += s.title + separator;
      })
      .on("suite end", function (s) {
        context = context.slice(0, -(s.title.length + separator.length));
      });
  } catch (e) {
    throw e;
  }
};

module.exports = emitter;
