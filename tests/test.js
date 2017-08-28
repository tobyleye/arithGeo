import chai  from 'chai';
import aritGeo  from '../src/main';

const assert = chai.assert;

describe("aritGeo", () => {

	describe("aritGeo tests", () => {
		it("should return Arithmetic for [2, 4, 6, 8, 10, 12, 14", () => {
			assert.equal(aritGeo( [2, 4, 6, 8, 10, 12, 14] ), 'Arithmetic');
		});

		it("should return Arithmetic for [14, 12, 10, 8, 6, 4, 2]", () => {
			assert.equal(aritGeo( [14, 12, 10, 8, 6, 4, 2] ), 'Arithmetic');
		});

		it("should return Geometric for [2, 4, 8, 16, 32, 64, 128, 256] ", () => {
			assert.equal(aritGeo( [2, 4, 8, 16, 32, 64, 128, 256] ), 'Geometric');
		});

		it("should return Geometric for [256, 128, 64, 32, 16, 8, 4, 2] ", () => {
			assert.equal(aritGeo( [256, 128, 64, 32, 16, 8, 4, 2] ), 'Geometric');
		});

		it("should return 0 for empty array", () => {
			assert.equal(aritGeo( [] ), 0);
		});

		it("Should return undefined for -5", () => {
			assert.equal(aritGeo( -5 ), -1);
		});

		it("Should return undefined for 5", () => {
			assert.equal(aritGeo( 5 ), -1);
		});

		it("should return -1 for demo", () => {
			assert.equal(aritGeo( 'demo' ), -1);
		});

		it("should return return -1 for an array of one element [2]", () => {
			assert.equal(aritGeo( [2] ), -1);
		});

		it("should return return -1 for [3, 's', 5, '22']", () => {
			assert.equal(aritGeo( [3, 's', 5, '22'] ), -1);
		});

		it("should return return -1 for [2, 200, 34, 5249000]", () => {
			assert.equal(aritGeo([2, 200, 34, 5249000]), -1);
		});

		it("should return return -1 for [2, 200, 34, 5249000]", () => {
			assert.equal(aritGeo([2, 200, 34, 5249000]), -1);
		});

	})

})