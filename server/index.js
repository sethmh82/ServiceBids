import express from 'express';
import path from 'path';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';
var env = process.env.NODE_ENV || 'test';
var config = require(path.join(__dirname, 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
import db from './models';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';

//ADDED PROFILE
import profile from './routes/profile';

let app = express();

db.sequelize.sync().then(function() {
    console.log('looks fine');
});

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);

//ADDED PROFILE
app.use('/api/:id', profile);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
