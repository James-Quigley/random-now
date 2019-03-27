function randomInt(max) {
  return Math.floor(Math.random() * max);
}
const quotes = require('./quotes.json');

module.exports = (req, res) => {
  res.end(JSON.stringify(quotes[randomInt(quotes.length)]));
}