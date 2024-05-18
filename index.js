const express = require('express');
const app = express();

const loggingMiddleware = (req, res, next) => {
    const startTime = new Date().getTime();
    const author = "Yugal";

    const sendReq = res.send;
    res.send = function(data) {
        const duration = new Date().getTime() - startTime;
        console.log(`
          Method: ${req.method} ,
          URL: ${req.url} ,
          Timestamp: ${new Date()},
          Duration: ${duration}ms,
          Author : ${author}`);
          sendReq.call(this, data);
    };
    
    next();
};

app.use(loggingMiddleware);

app.get('/logging', (req, res) => {
    res.send({
      message : 'Logging Middleware Success'
    });
});

const PORT = 6600;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});