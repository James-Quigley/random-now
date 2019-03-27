function randomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = (req, res) => {
  res.end(JSON.stringify({
    r: randomInt(256),
    g: randomInt(256),
    b: randomInt(256),
    a: randomInt(256)
  }));
}