import express from 'express'
import bodyParser from 'body-parser'
import User from '../db/User'

const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  User.find({}, (err, docs) => {
    if (err) return console.error(err)
    if (docs !== undefined) {
      res.json(docs)
    } else {
      res.status(500)
    }
  })
})

router.get('/:id', (req, res) => {
  User.find({ user_id: req.params.id }, (err, docs) => {
    if (err) return console.error(err)
    if (docs.length > 0) {
      res.json(docs)
    } else {
      res.status(404).end()
    }
  })
})

// create user
router.post('/', (req, res) => {
  const newUser = new User(req.body)
  newUser.save(err => {
    if (err) return console.error(err)
    res.status(201).json(newUser)
  })
})

// update specific user
router.put('/:id', (req, res) => {
  User.findOneAndUpdate(
    { user_id: req.params.id },
    req.body,
    { new: true },
    (err, doc) => {
      if (err) return console.error(err)
      if (doc) {
        res.json(doc)
      } else {
        res.status(404).end('Not found')
      }
    }
  )
})

// delete specific user
router.delete('/:id', (req, res) => {
  User.findOneAndRemove({ user_id: req.params.id }, (err, doc) => {
    if (err) return console.error(err)
    if (doc) {
      res.status(200).end()
    } else {
      res.status(404).end('Not found')
    }
  })
})

export default router
