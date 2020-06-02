import 'babel-polyfill';
import request from 'supertest';
import { expect } from 'chai';
import app from './app';

describe('Street Endpoints', () => {
    it('should create a new street', async () => {
        const res = await request(app)
        .post('/street')
        .send({
            name: 'bovi street',
            start: [45,29],
            end: [89,32]
        })
        expect(res.statusCode).to.equal(200);
        expect(JSON.stringify(res.body)).to.contain('Street');
    })

    it('should not create street', async () => {
        const res = await request(app)
        .post('/street')
        .send({
            name: 'bovi street',
            start: "[45,29]",
            end: [89,32]
        })
        expect(res.statusCode).to.equal(500);
        expect(JSON.stringify(res.body)).to.contain('error');
    })
})