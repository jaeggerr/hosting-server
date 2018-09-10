import * as minimist from 'minimist'
import * as httpServer from 'http-server'

const argv = minimist(process.argv.slice(2))
const port = argv.port

if (!port) {
  console.error('Usage: npm run start -- --port <port>')
  process.exit(1)
}

const server = httpServer.createServer({
  root: 'files'
})
server.listen(port, () => {
  console.log(`Hosting server listening at http://localhost:${port}.`)
})
