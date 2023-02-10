import express from 'express';

const app = express();

import { xrouter } from './xrouter.js';

app.use('/xroute', xrouter);

app.listen(3030, () => {
    console.log('App started at 3030')
});
