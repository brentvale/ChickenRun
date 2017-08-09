let expect = chai.expect;

describe("Chicken", () => {
	var sandbow;
	
	beforeEach(() => {
		sandbox = sinon.sandbox.create();
		
		sandbox.stub(window.console, 'log');
		sandbox.stub(window.console, 'error');
	});
	
	afterEach(() => {
		sandbox.restore();
	})
	describe("constructor", () => {
		it("should have a default name", () => {
			const chicken = new Chicken();
			expect(chicken.name).to.equal("Chicklet");
		});
		it("should set chicken's name if provided", () => {
			const chicken = new Chicken("Polly");
			expect(chicken.name).to.equal("Polly");
		});
	});
	describe("#greets", () => {
	it("should throw if no target is passed in", () => {
      expect(() => {
        (new Chicken()).greets();
      }).to.throw(Error);
    });

    it("should greet passed target", () => {
      let greetings = (new Chicken("Polly")).greets("Baby");
      expect(greetings).to.equal("Polly greets Baby");
    });
  });
	describe("#lateGreets", () => {
		it("should pass an error if no target is passed", (done) => {
			(new Chicken()).lateGreets(null, (err, greetings) => {
				expect(err).to.be.an.instanceof(Error);
				done();
			});
		});
		it("should greet passed target after one second", (done) => {
			(new Chicken("Pidgy")).lateGreets("Baby", (err, greetings) => {
				expect(greetings).to.equal("Pidgy greets Baby");
				done();
			});
		});
	});
});