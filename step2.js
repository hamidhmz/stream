// multi transform with generator without pipes

const fs = require("fs");
const { pipeline } = require("stream/promises");

const rs = fs.createReadStream("./input.txt", { highWaterMark: 1 });
const ws = fs.createWriteStream("./output.txt");

pipeline(
  rs, // [1, 2, 4, 5],
  async function* (_rs) {
    console.log("start generator");
    for await (const ch of _rs) {
      console.log("ch:", ch.toString());
      yield ch.toString().toUpperCase();
    }
  },
  async function* (_rs) {
    console.log("start generator");
    for await (const ch of _rs) {
      console.log("ch:", ch.toString());
      yield ch.toString().toUpperCase();
    }
  },
  ...ws
).then(() => {
  console.log("end of pipeline");
});
