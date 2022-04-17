const fs = require("fs");
const { Transform } = require("stream");
const readStream = fs.createReadStream("./input.txt");
const writeStream = fs.createWriteStream("./output.txt");

readStream
  .pipe(
    new Transform({
      transform(chunk, _ending, next) {
        this.push(chunk);
        next();
      },
    })
  )
  .pipe(writeStream);
