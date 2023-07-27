import DHT from 'hyperdht'

const node = new DHT()

const server = node.createServer()

server.on('connection', socket => {
  console.log('Received connection!')

  process.stdin.pipe(socket).pipe(process.stdout)
})

const keyPair = DHT.keyPair()
console.log(keyPair.publicKey.toString('hex'))

await server.listen(keyPair)
