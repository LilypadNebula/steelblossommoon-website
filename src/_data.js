let Parser = require('rss-parser');
let parser = new Parser();

export async function get(req, res, next) {
  let temp = parser.parseURL('https://feed.podbean.com/rpgwelcomeparty/feed.xml')
  res.end(JSON.stringify(temp))
}