// const request = require('supertest');
// const app = require('../app');
// const db = require('./config/database');

// const agent = request.agent(app);

// beforeAll(async () => await db.connect());
// afterEach(async () => await db.clear());
// afterAll(async () => await db.close());

// describe('POST /columns', () => {
//   describe('Sending the column', () => {
//     test('should respond wint a 200 status code', async () => {
//       const response = await agent.post('/api/columns').send({
//         color: '#ccc',
//         name: 'To do',
//         numberOfTasks: 30,
//       });
//       expect(response.statusCode).toBe(200);
//       expect(res.body).toBeTruthy();
//     });
//   });
// });

const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const columns = db.collection('columns');

    const mockUser = {_id: 'some-user-id', color: '#ccc', name: 'To do', numberOfTasks: 30,};
    await columns.insertOne(mockUser);

    const insertedUser = await columns.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });

  it('should get a doc from collection', async () => {
    const columns = db.collection('columns');

    const mockUser = {_id: 'some-user-id', color: '#ccc', name: 'To do', numberOfTasks: 30,};
    await columns.insertOne(mockUser);

    const insertedUser = await columns.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});