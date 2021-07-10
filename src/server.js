const protoLoader = require('@grpc/proto-loader')
const grpc = require('grpc')
const path = require('path')

const protoObject = protoLoader.loadSync(
  path.resolve(__dirname, '../proto/notes.proto')
)
const NotesDefinition = grpc.loadPackageDefinition(protoObject)

function Find({ request: { id } }, callback) {
  const note = notes.find((note) => note.id === id)
  if (!note) return callback(new Error('Not found'), null)
  return callback(null, { note })
}

function List(_, callback) {
  return callback(null, { notes })
}

const notes = [
  { id: 1, title: 'Note 1', description: 'Content 1' },
  { id: 2, title: 'Note 2', description: 'Content 2' },
]

const server = new grpc.Server()
server.addService(NotesDefinition.NoteService.service, { Find, List })

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()
console.log('Server listening...')
