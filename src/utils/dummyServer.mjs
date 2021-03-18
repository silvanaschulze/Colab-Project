import express from 'express';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/', (req, res) => 
{
    //res.setHeaderres.setHeader("Access-Control-Allow-Origin", '*');
    res.json('Hello World!')}
);

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));