import 'babel-polyfill';
import sinon from 'sinon';
import { expect } from 'chai';
import Street from './street';


describe("Get all streets", function(){
    /**
     * Test will pass if we get all streets
     */
   it("should return all streets", done => {
       const StreetMock = sinon.mock(Street);
       const expectedResult = {status: true, street: []};
       StreetMock.expects('find').yields(null, expectedResult);
       Street.find((err, result) => {
           StreetMock.verify();
           StreetMock.restore();
           expect(result.status).to.be.true;
           done();
       });
   });

   /**
    * Test will pass if we fail to get a street
    */
   it("should return error", done => {
       const StreetMock = sinon.mock(Street);
       const expectedResult = {status: false, error: "Something went wrong"};
       StreetMock.expects('find').yields(expectedResult, null);
       Street.find((err, result) => {
           StreetMock.verify();
           StreetMock.restore();
           expect(err.status).to.not.be.true;
           done();
       });
   });
});


describe("Post a new street", () => {
    /**
     * Test will pass if the street is saved
     */
    it("should create new street", done => {
        const StreetMock = sinon.mock(Street);
        const street = StreetMock.object;
        const expectedResult = { status: true };
        StreetMock.expects('create').yields(null, expectedResult);
        street.create({ name: 'Lincon Drive', start: 82, end: 72}, (err, result) => {
            StreetMock.verify();
            StreetMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
    /**
     * Test will pass if the street is not saved
     */
    it("should return error, if street not saved", done => {
        const StreetMock = sinon.mock(Street);
        const street = StreetMock.object;
        const expectedResult = { status: false };
        StreetMock.expects('create').yields(expectedResult, null);
        street.create({ name: 'Lincon Drive', start: 82, end: 72}, (err, result) => {
            StreetMock.verify();
            StreetMock.restore();
            expect(err.status).to.not.be.true;
            expect()
            done();
        });
    });
});