const supertest = require('supertest');
const { columnRouter } = require('../routes/column.routes');

describe('POST /columns', () => {
  describe('Sending the column', () => {
    it('should respond wint a 200 status code', async () => {
      const response = await supertest(columnRouter).post('/columns').send({
        color: '#ccc',
        name: 'To do',
        numberOfTasks: 30,
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
