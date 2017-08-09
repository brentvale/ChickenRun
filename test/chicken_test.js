import { expect } from 'chai';
import Chicken from '../src/js/chicken';

describe("Chicken", () => {
	describe("constructor", () => {
		it("should have a default name", () => {
			const chicken = new Chicken({});
			expect(chicken.name).to.equal("Chicklet");
		});
		it("should set chicken's name if provided", () => {
			const chicken = new Chicken({name: "Polly"});
			expect(chicken.name).to.equal("Polly");
		});
	});
	describe("#greets", () => {
	it("should throw if no target is passed in", () => {
      expect(() => {
        (new Chicken({})).greets();
      }).to.throw(Error);
    });

    it("should greet passed target", () => {
      let greetings = (new Chicken({name: "Polly"})).greets("Baby");
      expect(greetings).to.equal("Polly greets Baby");
    });
  });
	describe("#lateGreets", () => {
		it("should pass an error if no target is passed", (done) => {
			(new Chicken({})).lateGreets(null, (err, greetings) => {
				expect(err).to.be.an.instanceof(Error);
				done();
			});
		});
		it("should greet passed target after one second", (done) => {
			(new Chicken({name: "Pidgy"})).lateGreets("Baby", (err, greetings) => {
				expect(greetings).to.equal("Pidgy greets Baby");
				done();
			});
		});
	});
});