
/* const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6
}


fs.createReadStream('kepler_data.csv')
  .pipe(parse({
    comment: '#',
    columns: true,
  }))
  .on('data', (data) => {
    if (isHabitablePlanet(data)) {
      results.push(data);
    }
  })
  .on('end', () => {
    console.log(results.map((planet) => planet['kepler_name']));
  }) */

/** Server Example */
/* const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({name: 'Habitable Planets API', version: '1.0.0' }));
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}) */



/// Express Example 

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { friendsRouter } = require('./routes/friends.router.js');
const { messagesRouter } = require('./routes/messages.router.js');

app.use((req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] Request received`);
  console.log(`${req.method} request for '${req.url}'`);
  next();
})

app.use(express.json());

app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

