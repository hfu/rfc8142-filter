const Parser = require('json-text-sequence').parser
const fs = require('fs')

let count = 0

const parser = new Parser()
  .on('data', f => {
    count++
    if (count % 100000 === 0) {
      console.error(count)
    }
    if (count > 5000000) {
      if (f.geometry.type === 'Polygon') {
        console.log(`\x1e${JSON.stringify(f)}`)
      }
    }
  })

process.stdin.pipe(parser)

