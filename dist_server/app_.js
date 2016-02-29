import 'babel-polyfill';
import express from 'express';
import path from 'path';
import fallback from 'express-history-api-fallback';
import cors from 'cors';
import jwt from 'express-jwt';
import mongoose from 'mongoose';
import dbUri from './db/uri';
import channels from './routes/channels';
import users from './routes/users';

mongoose.connect(dbUri);

const API_KEY = process.env.CYLINDER_API_KEY;
const root = path.join(__dirname, '../dist');
const app = express();

const jwtCheck = jwt({
  secret: new Buffer(process.env.CYLINDER_AUTH0_SECRET, 'base64'),
  audience: process.env.CYLINDER_AUTH0_CLIENTID
});

app.use(express.static(root));
app.use(cors());
app.use('/channels', jwtCheck);
app.use('/channels', channels);
app.use('/users', users);

app.get('/searchresults/:keyword', (req, res) => YTSearch({ key: API_KEY, term: req.params.keyword, max: '10' }, response => {
  res.send(response);
}));

app.use(fallback('index.html', { root }));

export default app;