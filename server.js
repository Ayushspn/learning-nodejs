
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

      const friends = [
        { name: 'Alice', id: 1 },
        { name: 'Bob', id: 2 },
        { name: 'Charlie', id: 3 }
      ];

      app.get('/friends', (req, res) => {
        res.json(friends);
      })

      app.get('/friends/:friendId', (req, res) => {
        const friendId = parseInt(req.params.friendId, 10);
        const friend = friends.find(f => f.id === friendId);
        res.json(friend || { error: 'Friend not found' });
      })

      app.get('/messages', (req, res) => {
        res.send('<ul><li>Message 1</li><li>Message 2</li></ul>');
      });

      app.post('/messages', (req, res) => {
        res.send('Message received');
      });

      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      })

    