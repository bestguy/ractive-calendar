var config = require('config');
var express = require('express');
var logger = require('morgan');

var app = new express();

// ## Middleware

app.use(logger(config.logger));
app.use(express.static(__dirname + '/public'));

// ### Dev only
if (config.env == 'dev') {
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig), {}));
}

// Mock APIs
let _ = require('lodash');
let data = require('./dev_data.json');

function getEvents(start, end, type) {
  var events = data;
  if (type) {
    events = _.filter(events, { type: type });
  }
  if (start && end) {
    events = _.filter(events, event => {
      return event.date >= start && event.date <= end
    });
  }
  return events;
}

function getEvent(id) {
  return _.find(data, { id: id });
}

// List all events for user
app.get('/calendar/events', (req, resp) => {
  let start = req.query.start;
  let end = req.query.end;

  let events = getEvents(start, end);
  resp.json(events);
});

// List all events of type for user
app.get('/calendar/events/:type', (req, resp) => {
  let type = req.params.type;
  let start = req.query.start;
  let end = req.query.end;

  let events = getEvents(start, end, type);

  resp.json(events);
});

// Get a single event
app.get('/events/:id', (req, resp) => {
  let id = req.params.id;

  let event = getEvent(id);
  resp.json(event);
});

app.listen(config.port, () => console.log('Server running...'));
