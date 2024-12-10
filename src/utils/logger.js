const log = (...values) => {
  //console.log(...values);
  if (process.env.LOG == "true") {
    console.log(...values);
  }
};

module.exports = { log };
