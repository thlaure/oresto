import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mysql, { Pool } from 'mysql2';

dotenv.config({path: __dirname + '/../../../.env'});

const app: Express = express();

app.use(cors())

interface DatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

const dbConfig: DatabaseConfig = {
  host: process.env.MARIADB_HOST!,
  database: process.env.MARIADB_DATABASE!,
  user: process.env.MARIADB_USER!,
  password: process.env.MARIADB_PASSWORD!
};

const db: Pool = mysql.createPool(dbConfig);

app.get('/todolist', (req: Request, res: Response) => {
  const SelectQuery = "SELECT * FROM todo";
  db.query(SelectQuery, (err, result) => {
      if (err) console.log(err);
      res.send(result)
  })
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/allergen', (req: Request, res: Response) => {
    const SelectQuery = "SELECT * FROM allergen";
    db.query(SelectQuery, (err, result) => {
        if (err) console.log(err);
        res.send(result)
    })
});

const port = process.env.NODEJS_PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});