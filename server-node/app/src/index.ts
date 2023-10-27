import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({path: __dirname + '/../../../.env'});

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const port = process.env.NODEJS_PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});