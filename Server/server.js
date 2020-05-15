const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

var cors = require('cors');
app.use(cors());

let apiList = [
  {
    image: 'https://media.tegna-media.com/assets/WNEP/images/9ff2cfa4-4d47-49ea-9964-9d30730c442e/9ff2cfa4-4d47-49ea-9964-9d30730c442e_1920x1080.jpg',
    title: 'test title0',
    date: '061320171201',
    content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  },
  {
    image: 'https://wallpapercave.com/wp/uw9hpu5.jpg',
    title: 'test title1',
    date: '051520200503',
    content: 'test content'
  },
  {
    image: 'https://mcdn.wallpapersafari.com/medium/7/62/xYLNbd.jpg',
    title: 'test title2',
    date: '051220201405',
    content: 'test content'
  }
];

fs.writeFile('server.json', JSON.stringify(apiList), err => {
  if (err) throw err;
  console.log('Saved file');
});

app.get('/getAll', (req, res) => {
  let apiData = fs.readFileSync("server.json");
  let apiInfo = JSON.parse(apiData);

  res.send(apiInfo);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});