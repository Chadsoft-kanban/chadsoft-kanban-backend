const request = require('supertest');
const app = require('../app');

describe('Photos endpoint', () => {
  test('should return hello world object', async () => {
    const res = await request(app).get('/api/photos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'Hello World',
    });
  });
});
