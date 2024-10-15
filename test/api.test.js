// test/items.test.js

const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('API Testing', () => {
    let itemId;

    // Create an item before running the tests
    before((done) => {
        const newItem = { name: 'Item for Testing' };
        request(app)
            .post('/api/items')
            .send(newItem)
            .end((err, res) => {
                itemId = res.body.id; // Store the ID of the created item for later tests
                done();
            });
    });

    it('should return all items', (done) => {
        request(app)
            .get('/api/items')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.at.least(1);
                done();
            });
    });

    it('should create a new item', (done) => {
        const newItem = { name: 'Item 3' };
        request(app)
            .post('/api/items')
            .send(newItem)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('name', 'Item 3');
                done();
            });
    });

    // Test case for deleting an item
    it('should delete an item by id', (done) => {
        request(app)
            .delete(`/api/items/${itemId}`)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('message', 'Item deleted successfully');
                done();
            });
    });

    it('should return 404 for non-existing item deletion', (done) => {
        request(app)
            .delete('/api/items/999') // Assuming 999 does not exist
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.have.property('message', 'Item not found');
                done();
            });
    });

    it('should return 404 for non-existing item update', (done) => {
        const updatedItem = { name: 'New Name' };
        request(app)
            .put('/api/items/999') // Assuming 999 does not exist
            .send(updatedItem)
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.have.property('message', 'Item not found');
                done();
            });
    });
});
