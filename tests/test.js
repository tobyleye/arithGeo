import chai  from 'chai';
import aritGeo  from '../src/main';

const assert = chai.assert;

describe("aritGeo", () => {

	describe("aritGeo tests", () => {

		// test 1
		it("should return Arithmetic for [2, 4, 6, 8, 10, 12, 14", () => {
			assert.equal(aritGeo( [2, 4, 6, 8, 10, 12, 14] ), 'Arithmetic');
		});

		// test 2
		it("should return Arithmetic for [14, 12, 10, 8, 6, 4, 2]", () => {
			assert.equal(aritGeo( [14, 12, 10, 8, 6, 4, 2] ), 'Arithmetic');
		});

		// test 3
		it("should return Geometric for [2, 4, 8, 16, 32, 64, 128, 256] ", () => {
			assert.equal(aritGeo( [2, 4, 8, 16, 32, 64, 128, 256] ), 'Geometric');
		});

		// test 4
		it("should return Geometric for [256, 128, 64, 32, 16, 8, 4, 2] ", () => {
			assert.equal(aritGeo( [256, 128, 64, 32, 16, 8, 4, 2] ), 'Geometric');
		});

		// test 5
		it("should return 0 for empty array", () => {
			assert.equal(aritGeo( [] ), 0);
		});

		// test 6
		it("Should return -1 for -5", () => {
			assert.equal(aritGeo( -5 ), -1);
		});

		// test 7
		it("Should return -1 for 5", () => {
			assert.equal(aritGeo( 5 ), -1);
		});

		// test 8
		it("should return -1 for demo", () => {
			assert.equal(aritGeo( 'demo' ), -1);
		});

		// test 9
		it("should return -1 for an array of one element [2]", () => {
			assert.equal(aritGeo( [2] ), -1);
		});

		// test 10
		it("should return -1 for [3, 's', 5, '22']", () => {
			assert.equal(aritGeo( [3, 's', 5, '22'] ), -1);
		});

		// test 11
		it("should return -1 for [2, 200, 34, 5249000]", () => {
			assert.equal(aritGeo([2, 200, 34, 5249000]), -1);
		});

		// test 12
		it("should return -1 for []", () => {
			assert.equal(aritGeo([5, 4, 1, 5, 4]), -1);
		});

		// test 13
		it("should return Arithmetic for [0, 0, 0, 0, 0]", () => {
			assert.equal(aritGeo([0,0,0,0,0]), 'Arithmetic');
		});

		// test 14
		it("should return -1 for [2,4]", () => {
			assert.equal(aritGeo([2, 4]), -1);
		});

	})

})