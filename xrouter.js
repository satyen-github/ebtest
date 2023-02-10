import express from 'express';

export const xrouter = express.Router();

xrouter.get('/hello', (req, resp) => {
    resp.status(200).send('Hello there');
})
