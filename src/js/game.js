
	
/**
 * GAME class.
 * 
 * @constructor
 * @param {Object} chicken - Chicken
 * @param {Number} lives  - Number of lives
 * @param {Object} canvas  
 */
	
import Chicken from './chicken';

export default class Game{
	constructor(props){
		this.chicken = new Chicken({});
		this.lives = 3;
		this.canvas = props.target;
		this.start();
	}
	start(){
		this.interval = setInterval(() => {
			console.log("timer going ")
		}, 1000)
	}
};
