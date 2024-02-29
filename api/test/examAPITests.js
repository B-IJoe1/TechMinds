process.env.NODE_ENV = "test"; // This will prevent the backend from listening to port 8095 when running tests.

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server'); // Your Express app instance
const { connect, closeDatabase, clearDatabase } = require('./test.config');

// Configure Chai to use the Chai HTTP plugin
chai.use(chaiHttp);
const expect = chai.expect;

// Run before all tests
before(async () => {
  await connect();
});

// Run after all tests
after(async () => {
  await closeDatabase();
});

// Run before each test
beforeEach(async () => {
  await clearDatabase();
});

describe('Regression Tests: Exam API', () => {
    // Test for GET request to '/user/getAll'
    it('should get all Exams', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array'); // Change expectation to an array if that's what the route returns
          done();
        });
    });
  
    it('should get specific exam from patientId', (done) => {
      chai
        .request(app)
        .get('/patientId')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(0); // Check if array size is 0
          done();
        });
    });
    
    it('should create a new exam', (done) => {
      const examdata = {
        patientId: '12345',
        examId: 'ABCDE12345',
        imageURL: 'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434350_XR_CHEST_AP_PORTABLE_1.png',
        keyFindings: 'No significant findings',
        brixiaScore: 1,
        age: 35,
        sex: 'M',
        bmi: 22.5,
        zipCode: 12345,

      };
      chai.request(app)
        .post('/api/index/admin')
        .send(examdata)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('_id');
          done();
        });
    });

    it('should delete a specific exam', (done) => {
        chai
          .request(app)
          .delete(`/api/index/${examId}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf(0); // Check if array size is 0
            done();
          });
      });
      it('should update an existing exam', (done) => {

        //Object ID on MongoDB (First test) 
        const existingExamId = '61e83d679dc59e6e8e11a1cf';
    
        // Specify the updated exam data
        const updatedExamData = {
          patientId: '12345',
          age: 40,
          sex: 'F',
          zipCode: '54321',
          bmi: 25.5,
          KeyFindings: 'Updated findings',
          brixiaScore: "4,5,6",
          imageURL: 'https://example.com/updated-image.jpg',
        };
        chai.request(app)
        .patch(`/api/index/admin/${existingExamId}`)
        .send(updatedExamData)
        .end((err, res) => {
        expect(res).to.have.status(200); // Assuming successful update returns status 200
        done();
  });
});
});