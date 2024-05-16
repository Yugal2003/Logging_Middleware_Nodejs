const express = require('express');
const app = express();
const port = 6600;

app.use((req, res, next) => {
  const start = Date.now();
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  const author = "Yugal";

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(` 
    TimeStamp : [${timestamp}] 
    Method : ${method} 
    URL : ${url} 
    Time : ${duration}ms
    Author : ${author}`);
  });

  next();
});

app.get('/User/logging', (req, res) => {
  res.send({ "message" : "Logging Middleware Success"});
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
