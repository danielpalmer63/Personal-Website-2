const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

var cors = require('cors');
app.use(cors());

let apiList = [
    {
      title: 'test title0',
      month: '05',
      day: '13',
      year: '2020',
      content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'test title1',
        month: '05',
        day: '13',
        year: '2020',
        content: 'test content'
      },
      {
        title: 'test title2',
        month: '05',
        day: '13',
        year: '2020',
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