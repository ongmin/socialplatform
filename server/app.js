const express = require('express')
var app = express()
// const mongo = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fallback = require('express-history-api-fallback')
// const cors = require('cors')
// var jwt = require('express-jwt')
// const dbUri = require('./db/uri')
const path = require('path')
const root = path.join(__dirname, '../dist')

// moongoose.connect(dbUri)

// var jwtCheck = jwt({
//   secret: new Buffer(process.env.SOCIALPLATFORM_AUTH0_SECRET, 'base64'),
//   audience: process.env.SOCIALPLATFORM_AUTH0_ID
// })

app.use(express.static(root))
console.log('this works')
// app.use('/test', jwtCheck)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cors())

// setup persistent connection to database
// var dbconn
// mongo.connect(dbUri, (err, db) => {
//   if (err) throw err
//   console.log('connected to db')
//   dbconn = db
// })
//
// // GET /items returns entire items collection
// app.get('/users', (req, res) => {
//   console.log('GET /items')
//
//   dbconn.collection('items')
//     .find() // let front end decide what to do with _id
//     .sort({ date: 1 })  // sort by date
//     .toArray((err, item) => {
//       if (err) return err
//       res.send(JSON.stringify(item, null, 2))
//     })
// })

app.use(fallback('index.html', { root: root }))

module.exports = app
