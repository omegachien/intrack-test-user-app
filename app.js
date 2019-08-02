const express = require('express');

const app = express();

app.get("/user/:id/segment", (req, res, next) => {
  let segment = 'segment-2';
  if(req.params.id === 'user-1') {
    segment = 'segment-1';
  }

  res.json({
    segment: [segment]
  });
});

module.exports = app;