import { expect } from 'chai';
import Game from '../src/js/game';
import Chicken from '../src/js/chicken';

describe("Game", () => {
	describe("Constructor", () => {
		it("should have a default chicken", () => {
			const game = new Game({});
			expect(game.chicken).to.eql(new Chicken({}));
		});
		it("should start with 3 lives", () => {
			const game = new Game({});
			expect(game.lives).to.equal(3);
		})
	})
})