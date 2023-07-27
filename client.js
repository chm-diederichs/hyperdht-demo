import DHT from 'hyperdht'

const node = new DHT()

const socket = node.connect(Buffer.from(process.argv[2], 'hex'))

socket.on('open', socket => {
  console.log('Connected to server!')
})

process.stdin.pipe(socket).pipe(process.stdout)
