import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { connect } from './util/db-handlers';
import { getClosestStreet, addStreet, getStreets } from './controllers/street';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
    connect();
    console.log("HELLO WORLD...EVER RUNNING");
})

app.get('/', getStreets)
app.post('/street', addStreet);
app.get('/closest', getClosestStreet);

export default app;