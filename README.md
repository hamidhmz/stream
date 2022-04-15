# Stream

- in each stream we have a writer and reader.
- writer must request, and then reader will send data. until the last chunk is null.

## data processing

### realtime processing

- means we don't have the whole data. we cannot retry.

### batch processing

- means we have a whole data.
- we can retry.

### node js

#### Buffer

- buffer is an array which save data in binary format.
- we can use for fs ready and fs write, a write stream. which they are using a module inside node stream called Readable/ Writeable.
- each stream will start with a Readable object.
- we should use pipe, or we should use all events like, on('readable'), on('end'), which is using old way of stream, that means it will wait for read and the write, which base case is write should ask for the data not read.
- best practice is using pipe.
- 
