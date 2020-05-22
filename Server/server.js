const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
let nameArray;
const { MongoClient } = require('mongodb');
async function main() {
  const uri = "mongodb+srv://dpalmer63:Chelmsford45$@cluster0-8lyed.gcp.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await findBlogEntries(client, {
      maximumNumberOfResults: 3
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
async function findBlogEntries(client, {
  maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}){
  const cursor = client.db("blog").collection("blog_entries").find({})
  .sort( { last_review: -1 } )
  .limit(maximumNumberOfResults);

  const results = await cursor.toArray();

  let apiList = [
    {
      name: results[0].name,
      image: results[0].image,
      title: results[0].title,
      date: results[0].date,
      content: results[0].content
    },
    {
      name: results[1].name,
      image: results[1].image,
      title: results[1].title,
      date: results[1].date,
      content: results[1].content
    },
    {
      name: results[2].name,
      image: results[2].image,
      title: results[2].title,
      date: results[2].date,
      content: results[2].content
    }
  ];

  fs.writeFile('server.json', JSON.stringify(apiList), err => {
    if (err) throw err;
    console.log('Saved file');
  });

}
var cors = require('cors');
app.use(cors());





app.get('/getAll', (req, res) => {
  let apiData = fs.readFileSync("server.json");
  let apiInfo = JSON.parse(apiData);

  res.send(apiInfo);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});

