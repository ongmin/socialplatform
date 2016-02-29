import express from 'express';
import bodyParser from 'body-parser';
import slug from 'slug';
import Channel from '../db/Channel';

const router = express.Router();

router.use(bodyParser.json());

// list all channels
router.get('/', (req, res) => {
  Channel.find({}, (err, docs) => {
    if (err) return console.error(err);
    if (docs !== undefined) {
      res.json(docs);
    } else {
      res.status(500);
    }
  });
});

// search channel by slug
router.get('/:slug', (req, res) => {
  Channel.find({ slug: req.params.slug.toLowerCase() }, (err, docs) => {
    if (err) return console.error(err);
    if (docs.length > 0) {
      res.json(docs);
    } else {
      res.status(404).end();
    }
  });
});

// create new channel
router.post('/', (req, res) => {
  const newChannel = new Channel(Object.assign({}, req.body, { slug: slug(req.body.name).toLowerCase() }));
  newChannel.save(err => {
    if (err) return console.error(err);
    res.status(201).json(newChannel);
  });
});

router.put('/', (req, res) => {
  Channel.findOneAndUpdate({ slug: req.body.slug }, req.body, { new: true }, (err, doc) => {
    if (err) return console.error(err);
    if (doc) {
      res.status(200).json(doc);
    } else {
      res.status(404).end('Not found');
    }
  });
});

router.delete('/', (req, res) => {
  Channel.findOneAndRemove({ slug: req.body.slug }, (err, doc) => {
    if (err) return console.error(err);
    if (doc) {
      res.status(200).end();
    } else {
      res.status(404).end('Not Found');
    }
  });
});

export default router;