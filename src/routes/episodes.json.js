let Parser = require('rss-parser')
let parser = new Parser()

export async function get(req, res) {
  let data = await parser.parseURL('https://feed.podbean.com/rpgwelcomeparty/feed.xml')
  let filtered = data.items.filter(ep => ep.guid.includes('steel-blossom-moon'))
  let feed = await JSON.stringify(filtered.reverse())
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(feed);
}