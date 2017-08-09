(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _game = require('./js/game');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _game2.default({
  target: document.getElementsByTagName('canvas')[0]
});

},{"./js/game":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chicken = function () {
	function Chicken(props) {
		_classCallCheck(this, Chicken);

		this.name = props.name || "Chicklet";
	}

	_createClass(Chicken, [{
		key: "greets",
		value: function greets(target) {
			if (!target) {
				throw new Error("missing target");
			}
			return this.name + " greets " + target;
		}
	}, {
		key: "lateGreets",
		value: function lateGreets(target, cb) {
			setTimeout(function (self) {
				try {
					cb(null, self.greets(target));
				} catch (err) {
					cb(err);
				}
			}, 1000, this);
		}
	}]);

	return Chicken;
}();

exports.default = Chicken;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * GAME class.
 * 
 * @constructor
 * @param {Object} chicken - Chicken
 * @param {Number} lives  - Number of lives
 * @param {Object} canvas  
 */

var _chicken = require("./chicken");

var _chicken2 = _interopRequireDefault(_chicken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game(props) {
		_classCallCheck(this, Game);

		this.chicken = new _chicken2.default({});
		this.lives = 3;
		this.canvas = props.target;
		this.start();
	}

	_createClass(Game, [{
		key: "start",
		value: function start() {
			this.interval = setInterval(function () {
				console.log("timer going ");
			}, 1000);
		}
	}]);

	return Game;
}();

exports.default = Game;
;

},{"./chicken":2}]},{},[1]);
