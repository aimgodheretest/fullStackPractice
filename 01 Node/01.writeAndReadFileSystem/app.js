//1.writeFile
const fs = require("fs");
const { stringify } = require("querystring");
const { buffer } = require("stream/consumers");
/* 
fs.writeFile(
  "writeMessage.text",
  "Hello, I just Learn about how to write file in Node.js",
  (err) => {
    if (err) throw err;

    console.log("File Got Saved.");
  },
);
*/
fs.readFile("readMessage.text", "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
