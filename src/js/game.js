(function(exports){
	"use strict";
	
/**
 * GAME class.
 * 
 * @constructor
 * @param {Object} chicken - Chicken
 * @param {Number} lives  - Number of lives
 * @param {Object} canvas  
 */
	
	class Game(){
		constructor(){
			this.chicken = new Chicken();
			this.lives = 3;
			this.canvas = document.getElementsByTagName("canvas")[0];
		}
		start(){
			
		}
	};
	exports.Game = Game;
	
})(this);