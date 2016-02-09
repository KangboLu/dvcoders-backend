'use strict'

// Config for the server
exports.server = {
  'port': 3000
}

exports.mongodb = {
  'address': process.env.MONGODB_URL || 'localhost',
  'database': process.env.MONGODB_DATABASE || 'dvcoders'
}

// Config for the rendering client
exports.client = {
  'title': 'dvcoders'
}
