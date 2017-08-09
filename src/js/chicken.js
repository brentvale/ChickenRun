(function(exports){
	"use strict";
	
	function Chicken(name){
		this.name = name || "Chicklet";
	}
	
	exports.Chicken = Chicken;
	
	Chicken.prototype = {
		greets: function(target){
			if(!target){
				throw new Error("missing target");
			}
			return `${this.name} greets ${target}`;
		},
		lateGreets: function(target, cb){
			setTimeout((self) => {
				try {
					cb(null, self.greets(target));
				} catch (err) {
					cb(err);
				}
			}, 1000, this);
		}
	}
})(this);