const fs = require("fs");
const { Writable, Readable, Transform } = require("stream");

// const rs = fs.createReadStream('./input.txt', { highWaterMark: 1 });
// const ws = fs.createWriteStream('./output.txt');

const list = "abcdefgh".split("");
let i = 0;

class RS extends Readable {
  constructor() {
    super({ highWaterMark: 5 });
  }
  _read(n) {
    if (i < list.length) this.push(list[i++]);
    else this.push(null);
  }
}

const rs = new RS();

class WS extends Writable {
  constructor() {
    super({ highWaterMark: 3 });
  }
  _write(chunk, enc, next) {
    console.log("chunk w:", chunk.toString());
    setTimeout(() => {
      next();
    }, 1000);
  }
}

const ws = new WS();

rs.pipe(
  new Transform({
    transform(chunk, enc, next) {
      console.log("chunk t:", chunk);
      this.push(chunk.toString().toUpperCase());
      next();
    },
    
  })
).pipe(ws);

// if you wanna pipe 2 files together
rs.pipe(ws1);
rs.pipe(ws2);
