/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");



var gameCanvas = document.getElementById('game-canvas');
var x = window.matchMedia("(max-width: 1280px)");

if (x.matches) {
  gameCanvas.height = "612";
  gameCanvas.width = "850";
}

document.addEventListener("DOMContentLoaded", function () {
  new _scripts_game__WEBPACK_IMPORTED_MODULE_2__["default"](gameCanvas);
});

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./src/scripts/character.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile */ "./src/scripts/tile.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin */ "./src/scripts/coin.js");
/* harmony import */ var _spike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spike */ "./src/scripts/spike.js");
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monster */ "./src/scripts/monster.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Board = /*#__PURE__*/function () {
  function Board(gameWidth, gameHeight, ctx, level, currLevel) {
    _classCallCheck(this, Board);

    this.ctx = ctx;
    this.currLevel = currLevel;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.board = level;
    this.coinsArr = [];
    this.tilesArr = [];
    this.spikesArr = [];
    this.monsters = [];
    this.tree = new Image();
    this.tree.src = "./src/images/bg/sakura.png";
    this.grass = new Image();
    this.grass.src = "./src/images/tiles/grass.png";
    this.initializeBoard();
  }

  _createClass(Board, [{
    key: "initializeBoard",
    value: function initializeBoard() {
      var pos_x;
      var pos_y;
      var temp;

      for (var i = 0; i < this.board.length; i++) {
        temp = [];

        for (var j = 0; j < this.board[0].length; j++) {
          pos_y = i * this.gameHeight / 18;
          pos_x = j * this.gameWidth / 25;

          if (this.board[i][j] === "#") {
            var tile = new _tile__WEBPACK_IMPORTED_MODULE_1__["default"](pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight);
            temp.push(tile);
            this.tilesArr.push(tile);
          } else if (this.board[i][j] === "P") {
            this.character = new _character__WEBPACK_IMPORTED_MODULE_0__["default"](this.gameWidth, this.gameHeight, pos_x, pos_y);
            temp.push(this.character);
          } else if (this.board[i][j] === "C") {
            var coin = new _coin__WEBPACK_IMPORTED_MODULE_2__["default"](pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight);
            temp.push(coin);
            this.coinsArr.push(coin);
          } else if (this.board[i][j] === "S") {
            var spike = new _spike__WEBPACK_IMPORTED_MODULE_3__["default"](pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight);
            temp.push(spike);
            this.spikesArr.push(spike);
          } else if (this.board[i][j] === "Z") {
            var monster = new _monster__WEBPACK_IMPORTED_MODULE_4__["Snail"](pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight);
            temp.push(monster);
            this.monsters.push(monster);
          } else if (this.board[i][j] === "X") {
            var _monster = new _monster__WEBPACK_IMPORTED_MODULE_4__["Fairy"](pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight);

            temp.push(_monster);
            this.monsters.push(_monster);
          } else if (this.board[i][j] === "V") {
            var _monster2 = new _monster__WEBPACK_IMPORTED_MODULE_4__["Pig"](pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight);

            temp.push(_monster2);
            this.monsters.push(_monster2);
          } else {
            temp.push(" ");
          }
        }

        this.board[i] = temp;
      }

      this.numCoins = this.coinsArr.length;
    }
  }, {
    key: "updateBoard",
    value: function updateBoard(time) {
      if (!time) return; // Render background environment

      if (this.currLevel === 1 && this.gameWidth > 900) {
        this.ctx.drawImage(this.tree, this.gameWidth / 25, -(this.gameHeight / 36), this.gameWidth * 0.175, this.gameHeight / 2.4);
        this.ctx.drawImage(this.tree, this.gameWidth * 0.9, this.gameHeight / 9, this.gameWidth * 0.12, this.gameHeight / 3.6);
      } // Render tiles


      for (var i = 0; i < this.tilesArr.length; i++) {
        this.tilesArr[i].renderTile();
      } // Render Coins


      for (var _i = 0; _i < this.coinsArr.length; _i++) {
        this.coinsArr[_i].renderCoin();
      } // Render spikes


      for (var _i2 = 0; _i2 < this.spikesArr.length; _i2++) {
        this.spikesArr[_i2].renderSpike();
      } // Render monsters


      for (var _i3 = 0; _i3 < this.monsters.length; _i3++) {
        this.monsters[_i3].renderMonster();
      } // Update score and character position


      var numCoins = this.coinsArr.length;
      var result = this.character.update(this.board, this.coinsArr, this.spikesArr, this.monsters);
      if (typeof result === 'boolean') return true;
      this.coinsArr = result; // Render character

      this.character.renderCharacter(this.ctx);
      return numCoins - this.coinsArr.length;
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./src/scripts/tile.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Character = /*#__PURE__*/function () {
  function Character(gameWidth, gameHeight, startX, startY) {
    var _this = this;

    _classCallCheck(this, Character);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.characterWidth = this.gameWidth / 25 - 0.01;
    this.characterHeight = this.gameHeight / 18 - 0.01;
    this.jumping = false;
    this.x_velocity = 0;
    this.y_velocity = 0;
    this.position = {
      x: startX,
      y: startY
    };
    this.prevPosition = {
      x: startX,
      y: startY
    };
    this.setSound();
    this.setImage();
    this.left = false;
    this.right = false;
    this.up = false;
    document.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 37:
          _this.left = true;
          break;

        case 32:
        case 38:
          _this.up = true;
          break;

        case 39:
          _this.right = true;
          break;
      }
    });
    document.addEventListener("keyup", function (event) {
      switch (event.keyCode) {
        case 37:
          _this.left = false;
          break;

        case 32:
        case 38:
          _this.up = false;
          break;

        case 39:
          _this.right = false;
          break;
      }
    });
  }

  _createClass(Character, [{
    key: "getLeft",
    value: function getLeft() {
      return this.position.x;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.position.x + this.characterWidth;
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.position.y;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.position.y + this.characterHeight;
    }
  }, {
    key: "getPrevLeft",
    value: function getPrevLeft() {
      return this.prevPosition.x;
    }
  }, {
    key: "getPrevRight",
    value: function getPrevRight() {
      return this.prevPosition.x + this.characterWidth;
    }
  }, {
    key: "getPrevTop",
    value: function getPrevTop() {
      return this.prevPosition.y;
    }
  }, {
    key: "getPrevBottom",
    value: function getPrevBottom() {
      return this.prevPosition.y + this.characterHeight;
    }
  }, {
    key: "setLeft",
    value: function setLeft(x) {
      this.position.x = x;
    }
  }, {
    key: "setRight",
    value: function setRight(x) {
      this.position.x = x - this.characterWidth;
    }
  }, {
    key: "setTop",
    value: function setTop(y) {
      this.position.y = y;
    }
  }, {
    key: "setBottom",
    value: function setBottom(y) {
      this.position.y = y - this.characterHeight;
    }
  }, {
    key: "setPrevLeft",
    value: function setPrevLeft(x) {
      this.prevPosition.x = x;
    }
  }, {
    key: "setPrevRight",
    value: function setPrevRight(x) {
      this.prevPosition.x = x - this.characterWidth;
    }
  }, {
    key: "setPrevTop",
    value: function setPrevTop(y) {
      this.prevPosition.y = y;
    }
  }, {
    key: "setPrevBottom",
    value: function setPrevBottom(y) {
      this.prevPosition.y = y - this.characterHeight;
    }
  }, {
    key: "setSound",
    value: function setSound() {
      this.coinSound = new Audio("./src/audio/sound/coin-sound.mp3");
      this.coinSound.volume = 0.3;
      this.jumpSound = new Audio("./src/audio/sound/jump.mp3");
      this.jumpSound.volume = 0.7;
    }
  }, {
    key: "setImage",
    value: function setImage() {
      this.characterImage = new Image();
      this.characterImage.src = "./src/images/slime/slime.png";
      this.leftImage = new Image();
      this.leftImage.src = "./src/images/slime/left-slime.png";
      this.rightImage = new Image();
      this.rightImage.src = "./src/images/slime/right-slime.png";
    }
  }, {
    key: "play",
    value: function play(sound) {
      sound.pause();
      sound.currentTime = 0;
      sound.play();
    }
  }, {
    key: "renderCharacter",
    value: function renderCharacter(ctx) {
      ctx.drawImage(this.characterImage, this.position.x, this.position.y, this.characterWidth, this.characterHeight);
    }
  }, {
    key: "updateCharacter",
    value: function updateCharacter() {
      if (this.up && this.jumping == false) {
        this.play(this.jumpSound);
        this.y_velocity -= this.gameHeight / 20;
        this.jumping = true;
      }

      if (this.left) {
        this.characterImage = this.leftImage;
        this.x_velocity -= 0.9;
      }

      if (this.right) {
        this.characterImage = this.rightImage;
        this.x_velocity += 0.9;
      }

      this.y_velocity += 1.3;
      this.prevPosition.x = this.position.x;
      this.prevPosition.y = this.position.y;
      this.position.x += this.x_velocity;
      this.position.y += this.y_velocity;
      this.x_velocity *= 0.85;
      this.y_velocity *= 0.85;
    }
  }, {
    key: "update",
    value: function update(board, coins, spikes, monsters) {
      this.updateCharacter();
      this.handleEdgeCollision(); // handle tile collision 

      var left;
      var right;
      var top;
      var bottom;
      var value;
      var tileWidth = this.gameWidth / 25;
      var tileHeight = this.gameHeight / 18;
      top = Math.floor(this.getTop() / tileHeight);
      left = Math.floor(this.getLeft() / tileWidth);
      value = board[top][left];
      this.handleTileCollision(value, left * tileWidth, top * tileHeight, tileWidth);
      top = Math.floor(this.getTop() / tileHeight);
      right = Math.floor(this.getRight() / tileWidth);
      value = board[top][right];
      this.handleTileCollision(value, right * tileWidth, top * tileHeight, tileWidth);
      bottom = Math.floor(this.getBottom() / tileHeight);
      bottom = bottom > 17 ? 17 : bottom;
      left = Math.floor(this.getLeft() / tileWidth);
      value = board[bottom][left];
      this.handleTileCollision(value, left * tileWidth, bottom * tileHeight, tileWidth);
      bottom = Math.floor(this.getBottom() / tileHeight);
      bottom = bottom > 17 ? 17 : bottom;
      right = Math.floor(this.getRight() / tileWidth);
      value = board[bottom][right];
      this.handleTileCollision(value, right * tileWidth, bottom * tileHeight, tileWidth);
      if (this.getBottom() > this.gameHeight) this.setBottom(this.gameHeight);
      if (this.handleMonsterCollision(monsters)) return true;
      if (this.handleSpikeCollision(spikes)) return true;
      return this.handleCoinCollision(coins);
    }
  }, {
    key: "handleEdgeCollision",
    value: function handleEdgeCollision() {
      if (this.getLeft() < 0) {
        this.setPrevLeft(this.getLeft());
        this.setLeft(0);
      }

      if (this.getRight() > this.gameWidth) {
        this.setPrevRight(this.getRight());
        this.setRight(this.gameWidth);
      }

      if (this.getTop() < 0) {
        this.setPrevTop(this.getTop());
        this.setTop(0);
      }

      if (this.getBottom() > this.gameHeight) {
        this.setPrevBottom(this.getBottom());
        this.setBottom(this.gameHeight);
        this.jumping = false;
      }
    }
  }, {
    key: "handleCoinCollision",
    value: function handleCoinCollision(coins) {
      for (var i = 0; i < coins.length; i++) {
        if (this.getLeft() < coins[i].position.x + coins[i].width && this.getLeft() + coins[i].width > coins[i].position.x && this.getTop() < coins[i].position.y + coins[i].height && this.getBottom() > coins[i].position.y) {
          this.play(this.coinSound);
          coins.splice(i, 1);
        }
      }

      return coins;
    }
  }, {
    key: "handleSpikeCollision",
    value: function handleSpikeCollision(spikes) {
      for (var i = 0; i < spikes.length; i++) {
        if (this.getLeft() < spikes[i].position.x + spikes[i].width && this.getLeft() + spikes[i].width > spikes[i].position.x && this.getTop() < spikes[i].position.y + spikes[i].height && this.getBottom() > spikes[i].position.y) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "handleMonsterCollision",
    value: function handleMonsterCollision(monsters) {
      for (var i = 0; i < monsters.length; i++) {
        if (this.getLeft() < monsters[i].position.x + monsters[i].width && this.getRight() > monsters[i].position.x && this.getTop() < monsters[i].position.y + monsters[i].height && this.getBottom() > monsters[i].position.y) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "handleTileCollision",
    value: function handleTileCollision(value, tileX, tileY, tileSize) {
      if (value instanceof Object && value instanceof _tile__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        if (this.topTileCollision(tileY)) return;
        if (this.leftTileCollision(tileX)) return;
        if (this.rightTileCollision(tileX + tileSize)) return;
      }
    }
  }, {
    key: "topTileCollision",
    value: function topTileCollision(topTile) {
      if (this.getBottom() > topTile && this.getPrevBottom() <= topTile) {
        this.setPrevBottom(this.getBottom());
        this.setBottom(topTile - 0.01);
        this.jumping = false;
        return true;
      }

      return false;
    }
  }, {
    key: "leftTileCollision",
    value: function leftTileCollision(leftTile) {
      if (this.getRight() > leftTile && this.getPrevRight() <= leftTile) {
        this.setPrevRight(this.getRight());
        this.setRight(leftTile - 0.01);
        return true;
      }

      return false;
    }
  }, {
    key: "rightTileCollision",
    value: function rightTileCollision(rightTile) {
      if (this.getLeft() < rightTile && this.getPrevLeft() >= rightTile) {
        this.setPrevLeft(this.getLeft());
        this.setLeft(rightTile);
        return true;
      }

      return false;
    }
  }, {
    key: "bottomTileCollision",
    value: function bottomTileCollision(bottomTile) {
      if (this.getTop() < bottomTile && this.getPrevTop() >= bottomTile) {
        this.setPrevTop(this.getTop());
        this.setTop(bottomTile);
        return true;
      }

      return false;
    }
  }]);

  return Character;
}();



/***/ }),

/***/ "./src/scripts/coin.js":
/*!*****************************!*\
  !*** ./src/scripts/coin.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coin; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coin = /*#__PURE__*/function () {
  function Coin(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    _classCallCheck(this, Coin);

    this.ctx = ctx;
    this.width = gameWidth / 25;
    this.height = gameHeight / 18;
    this.position = {
      x: pos_x,
      y: pos_y
    };
    this.renderCoin();
  }

  _createClass(Coin, [{
    key: "renderCoin",
    value: function renderCoin() {
      var coinImage = new Image();
      coinImage.src = "./src/images/items/coin-gold.png";
      this.ctx.drawImage(coinImage, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Coin;
}();



/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoinExplorer; });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/scripts/board.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ "./src/scripts/levels.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CoinExplorer = /*#__PURE__*/function () {
  function CoinExplorer(gameCanvas) {
    _classCallCheck(this, CoinExplorer);

    this.ctx = gameCanvas.getContext("2d");
    this.gameWidth = gameCanvas.width;
    this.gameHeight = gameCanvas.height;
    this.gameRunning = false;
    this.currentLevel = 1;
    this.numDeaths = 0;
    this.muted = false;
    this.setSound();
    this.renderHomeScreen();
    this.addListeners();
  }

  _createClass(CoinExplorer, [{
    key: "setSound",
    value: function setSound() {
      this.menuMusic = new Audio("./src/audio/music/main-menu.mp3");
      this.menuMusic.volume = 0.2;
      this.menuMusic.loop = true;
      this.gameMusic = new Audio("./src/audio/music/background.mp3");
      this.gameMusic.volume = 0.4;
      this.gameMusic.loop = true;
      this.winMusic = new Audio("./src/audio/music/victory.mp3");
      this.winMusic.loop = true;
      this.winMusic.volume = 0.15;
      this.selectSound = new Audio("./src/audio/sound/select.wav");
    }
  }, {
    key: "play",
    value: function play(sound) {
      if (this.muted) return;
      sound.pause();
      sound.currentTime = 0;
      sound.play();
    }
  }, {
    key: "pauseAllMusic",
    value: function pauseAllMusic() {
      this.menuMusic.pause();
      this.gameMusic.pause();
      this.winMusic.pause();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      document.addEventListener('click', function (event) {
        if (!_this.gameRunning && !_this.muted) {
          _this.menuMusic.play();
        }
      });
      document.addEventListener('keydown', function (event) {
        // m key
        if (event.keyCode === 77) {
          if (_this.muted) {
            if (_this.gameRunning) {
              _this.gameMusic.play();
            } else {
              _this.menuMusic.play();
            }

            _this.muted = false;
          } else {
            _this.pauseAllMusic();

            _this.muted = true;
          }
        }
      });
    }
  }, {
    key: "renderHomeScreen",
    value: function renderHomeScreen() {
      this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
      var titleFontSize = this.gameWidth > 900 ? 80 : 65;
      this.ctx.font = "bold ".concat(titleFontSize, "px Arial");
      this.ctx.fillStyle = "yellow";
      this.ctx.fillText("COIN EXPLORER", 0.17 * this.gameWidth, this.gameHeight / 2.4);
      this.ctx.strokeStyle = "blue";
      this.ctx.lineWidth = 2;
      this.ctx.strokeText("COIN EXPLORER", 0.17 * this.gameWidth, this.gameHeight / 2.4);
      this.ctx.fillStyle = "blue";
      this.ctx.font = "bold 30px Arial";
      this.ctx.fillText("Press Enter to Begin!", this.gameWidth / 2.857, this.gameHeight / 1.44);
      this.ctx.font = "bold 20px Arial";
      this.ctx.fillText("Press esc to go back to home screen", this.gameWidth / 2.941, this.gameHeight / 1.2857);
      var coin = new Image();
      coin.src = "./src/images/items/coin-gold.png";

      coin.onload = function () {
        this.ctx.drawImage(coin, this.gameWidth * 0.28, this.gameHeight / 1.532, 40, 40);
      }.bind(this);

      var slime = new Image();
      slime.src = "./src/images/slime/slime.png";

      slime.onload = function () {
        this.ctx.drawImage(slime, this.gameWidth * 0.28, this.gameHeight / 1.3585, 40, 40);
      }.bind(this);

      this.checkEnter = this.checkEnter.bind(this);
      document.addEventListener('keydown', this.checkEnter);
    }
  }, {
    key: "checkEnter",
    value: function checkEnter(event) {
      if (event.keyCode === 13) {
        this.play(this.selectSound);
        document.removeEventListener('keydown', this.checkEnter);
        this.currentLevel = 1;
        this.newGame();
      }
    }
  }, {
    key: "checkEsc",
    value: function checkEsc(event) {
      // esc key
      if (event.keyCode === 27) {
        document.removeEventListener('keydown', this.checkEsc);
        document.removeEventListener('keydown', this.checkRestart);
        this.gameRunning = false;
        this.pauseAllMusic();
        this.play(this.selectSound);
        this.play(this.menuMusic);
        this.renderHomeScreen();
      }
    }
  }, {
    key: "renderGameOver",
    value: function renderGameOver() {
      this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
      var titleFontSize = this.gameWidth > 900 ? 80 : 65;
      var retryFontSize = this.gameWidth > 900 ? 30 : 25;
      var escFontSize = this.gameWidth > 900 ? 20 : 15;
      this.ctx.font = "bold ".concat(titleFontSize, "px Arial");
      this.ctx.fillStyle = "white";
      this.ctx.fillText("GAME OVER", this.gameWidth * 0.25, this.gameHeight / 2.4);
      this.ctx.font = "bold ".concat(retryFontSize, "px Arial");
      this.ctx.fillText("Press r key to retry level", this.gameWidth * 0.325, this.gameHeight / 1.44);
      this.ctx.font = "bold ".concat(escFontSize, "px Arial");
      this.ctx.fillText("Press esc to go back to home screen", this.gameWidth * 0.325, this.gameHeight / 1.2857);
      var sadSlime = new Image();

      sadSlime.onload = function () {
        this.ctx.drawImage(sadSlime, this.gameWidth * 0.73, this.gameHeight / 1.44, this.gameWidth * 0.298, this.gameHeight / 3.6);
      }.bind(this);

      sadSlime.src = "./src/images/slime/sad-slime.png";
      this.checkRestart = this.checkRestart.bind(this);
      document.addEventListener('keydown', this.checkRestart);
    }
  }, {
    key: "checkRestart",
    value: function checkRestart(event) {
      if (event.keyCode === 82) {
        this.play(this.selectSound);
        document.removeEventListener('keydown', this.checkRestart);
        this.gameRunning = true;
        this.newGame();
      }
    }
  }, {
    key: "renderWin",
    value: function renderWin() {
      this.gameMusic.pause();
      this.play(this.winMusic);
      this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
      var titleFontSize = this.gameWidth > 900 ? 80 : 65;
      var congratsFontSize = this.gameWidth > 900 ? 30 : 25;
      var escFontSize = this.gameWidth > 900 ? 20 : 15;
      this.ctx.font = "bold ".concat(titleFontSize, "px Arial");
      this.ctx.fillStyle = "white";
      this.ctx.fillText("YOU WIN!", this.gameWidth * 0.305, this.gameHeight / 3.6);
      this.ctx.font = "bold ".concat(congratsFontSize, "px Arial");
      this.ctx.fillText("Congrats on beating the game!", this.gameWidth * 0.28, this.gameHeight / 1.5);
      this.ctx.fillStyle = "blue";
      this.ctx.fillText("You died a total of ".concat(this.numDeaths, " times"), this.gameWidth * 0.322, this.gameHeight / 1.2857);
      this.ctx.fillStyle = "white";
      this.ctx.font = "bold ".concat(escFontSize, "px Arial");
      this.ctx.fillText("Press esc to go back to home screen", this.gameWidth * 0.325, this.gameHeight / 1.125);
      var chest = new Image();

      chest.onload = function () {
        this.ctx.drawImage(chest, this.gameWidth * 0.43, this.gameHeight / 2.88, this.gameWidth * 0.139, this.gameHeight / 4.832);
      }.bind(this);

      chest.src = "./src/images/items/chest-gold-close.png";
    }
  }, {
    key: "newGame",
    value: function newGame() {
      if (!this.gameRunning) {
        this.menuMusic.pause();
        this.play(this.gameMusic);
        this.numDeaths = 0;
      }

      document.removeEventListener('keydown', this.checkEsc);
      this.checkEsc = this.checkEsc.bind(this);
      document.addEventListener('keydown', this.checkEsc);
      this.ctx.fillStyle = "black";
      this.gameRunning = true;
      this.coins = 0;
      this.time = 60;
      this.prevTime = 0;
      this.levels = Object(_levels__WEBPACK_IMPORTED_MODULE_1__["default"])();
      this.maxLevel = this.levels.length - 1;
      this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](this.gameWidth, this.gameHeight, this.ctx, this.levels[this.currentLevel], this.currentLevel);
      this.gameLoop = this.gameLoop.bind(this);
      this.gameLoop();
    }
  }, {
    key: "gameLoop",
    value: function gameLoop(timestamp) {
      if (!this.gameRunning) return;
      var time = timestamp - this.prevTime;
      this.prevTime = timestamp;
      this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
      this.renderDeaths(this.numDeaths);
      this.renderCoins(this.coins);
      var result = this.board.updateBoard(time);

      if (typeof result === 'boolean') {
        this.numDeaths += 1;
        this.renderGameOver();
        return;
      }

      this.coins += isNaN(result) ? 0 : result;

      if (this.coins >= this.board.numCoins) {
        if (this.currentLevel < this.maxLevel) {
          this.currentLevel += 1;
          this.newGame();
        } else {
          this.renderWin();
        }

        return;
      }

      requestAnimationFrame(this.gameLoop);
    }
  }, {
    key: "renderDeaths",
    value: function renderDeaths(deaths) {
      this.ctx.font = "20px Arial";
      this.ctx.fillText("Deaths:", 10, 30);
      this.ctx.fillText(deaths, 90, 30);
    }
  }, {
    key: "renderCoins",
    value: function renderCoins(coins) {
      this.ctx.font = "20px Arial";
      this.ctx.fillText("Coins:", this.gameWidth - 110, 30);
      this.ctx.fillText(coins, this.gameWidth - 40, 30);
    }
  }]);

  return CoinExplorer;
}();



/***/ }),

/***/ "./src/scripts/levels.js":
/*!*******************************!*\
  !*** ./src/scripts/levels.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return [[], ["                         ", "       C C C C C C       ", "       ############      ", "     #                   ", "   #                     ", " #                    X  ", "                         ", "###################    ##", "                    ##   ", "C     C C C C C C C      ", "#     #############      ", "##C                      ", "####S               SSSSS", "###### C            #####", "       #                 ", "         #               ", "               P        V", "#########################"], ["                         ", "                         ", "                C   C    ", "               ##   #   X", "             C           ", "            ##           ", "          C              ", "         ##              ", "       C                 ", "      ##    SSSSSSSSSSSSS", "   C        #############", "   ##                    ", "       C                 ", "       ##                ", "           C            X", "           ##            ", "               P         ", "#SSSSSSSSSSSSS###SSSSSSSS"], ["                         ", "                        X", "CCCC                     ", "####                     ", "      ##   C             ", "           ##  C         ", "         C     ##        ", "        ##        C     C", "      C           ##     ", "     ##                 S", "                      ###", "  SC                     ", "  ##            CS ##    ", "      CS       ###       ", "      ##   C             ", "           ##            ", "               P         ", "#SSSSSSSSSSSSS###SSSSSSSS"], [" P                       ", "####                     ", "       C   C   C   C   C ", "      ##   #   #   #   #X", "                         ", "                         ", "             C           ", "             #           ", "        C         C      ", "        #    C    #      ", "             #           ", "        C                ", "        #             X  ", "             C           ", "             #           ", "                 C       ", "                 #       ", "SSSSSSSSSSSSSSSSSSSSSSSSS"], ["                         ", "                         ", "                         ", "                         ", "                         ", "                         ", "                         ", "                         ", "P   Z   Z   Z   Z   Z  ZC", "#########################", "                         ", "                         ", "                         ", "                         ", "                         ", "                         ", "                         ", "                         "]];
});
; //  ["                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         ",
//   "                         "]

/***/ }),

/***/ "./src/scripts/monster.js":
/*!********************************!*\
  !*** ./src/scripts/monster.js ***!
  \********************************/
/*! exports provided: Monster, Snail, Fairy, Pig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monster", function() { return Monster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snail", function() { return Snail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fairy", function() { return Fairy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pig", function() { return Pig; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Monster = /*#__PURE__*/function () {
  function Monster(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    _classCallCheck(this, Monster);

    this.position = {
      x: pos_x,
      y: pos_y
    };
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  _createClass(Monster, [{
    key: "setImage",
    value: function setImage(leftImage, rightImage) {
      this.leftImage = new Image();
      this.leftImage.src = leftImage;
      this.rightImage = new Image();
      this.rightImage.src = rightImage;
      this.monster = this.leftImage;
    }
  }, {
    key: "renderMonster",
    value: function renderMonster() {
      this.handleEdgeCollision();
      this.position.x -= this.speed;
      this.ctx.drawImage(this.monster, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "handleEdgeCollision",
    value: function handleEdgeCollision() {
      if (this.position.x < 0) {
        this.position.x = 0;
        this.speed *= -1;
        this.monster = this.rightImage;
      }

      if (this.position.x + this.width > this.gameWidth) {
        this.position.x = this.gameWidth - this.width;
        this.speed *= -1;
        this.monster = this.leftImage;
      }
    }
  }]);

  return Monster;
}();
var Snail = /*#__PURE__*/function (_Monster) {
  _inherits(Snail, _Monster);

  function Snail(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    var _this;

    _classCallCheck(this, Snail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Snail).call(this, pos_x, pos_y, ctx, gameWidth, gameHeight));
    _this.speed = 1.5;
    _this.width = gameWidth / 25;
    _this.height = gameHeight / 18;
    var left = "./src/images/monsters/left-snail.png";
    var right = "./src/images/monsters/right-snail.png";

    _this.setImage(left, right);

    _this.renderMonster();

    return _this;
  }

  return Snail;
}(Monster);
var Fairy = /*#__PURE__*/function (_Monster2) {
  _inherits(Fairy, _Monster2);

  function Fairy(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    var _this2;

    _classCallCheck(this, Fairy);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Fairy).call(this, pos_x, pos_y, ctx, gameWidth, gameHeight));
    _this2.speed = 1.8;
    _this2.width = gameWidth / 27.778;
    _this2.height = gameHeight / 18.4615;
    _this2.position.y = _this2.position.y - (_this2.height - gameHeight / 18);
    var left = "./src/images/monsters/left-fairy.png";
    var right = "./src/images/monsters/right-fairy.png";

    _this2.setImage(left, right);

    _this2.renderMonster();

    return _this2;
  }

  return Fairy;
}(Monster);
var Pig = /*#__PURE__*/function (_Monster3) {
  _inherits(Pig, _Monster3);

  function Pig(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    var _this3;

    _classCallCheck(this, Pig);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Pig).call(this, pos_x, pos_y, ctx, gameWidth, gameHeight));
    _this3.speed = 2.5;
    _this3.width = gameWidth / 50 * 3;
    _this3.height = gameHeight / 14.4;
    _this3.position.y = _this3.position.y - (_this3.height - gameHeight / 18);
    var left = "./src/images/monsters/left-pig.png";
    var right = "./src/images/monsters/right-pig.png";

    _this3.setImage(left, right);

    _this3.renderMonster();

    return _this3;
  }

  return Pig;
}(Monster);

/***/ }),

/***/ "./src/scripts/spike.js":
/*!******************************!*\
  !*** ./src/scripts/spike.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spike; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Spike = /*#__PURE__*/function () {
  function Spike(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    _classCallCheck(this, Spike);

    this.ctx = ctx;
    this.width = gameWidth / 25;
    this.height = gameHeight / 48;
    this.position = {
      x: pos_x,
      y: pos_y + this.height * 5 / 3.0
    };
    this.renderSpike();
  }

  _createClass(Spike, [{
    key: "renderSpike",
    value: function renderSpike() {
      var spikeImage = new Image();
      spikeImage.src = "./src/images/tiles/spikes1.png";
      this.ctx.drawImage(spikeImage, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Spike;
}();



/***/ }),

/***/ "./src/scripts/tile.js":
/*!*****************************!*\
  !*** ./src/scripts/tile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile = /*#__PURE__*/function () {
  function Tile(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    _classCallCheck(this, Tile);

    this.ctx = ctx;
    this.width = gameWidth / 25;
    this.height = gameHeight / 18;
    this.position = {
      x: pos_x,
      y: pos_y
    };
    this.renderTile();
  }

  _createClass(Tile, [{
    key: "renderTile",
    value: function renderTile() {
      var tileImage = new Image();
      tileImage.src = "./src/images/tiles/01.png";
      this.ctx.drawImage(tileImage, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Tile;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb2luLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3Bpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiXSwibmFtZXMiOlsiZ2FtZUNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ4Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJoZWlnaHQiLCJ3aWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJDb2luRXhwbG9yZXIiLCJCb2FyZCIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJjdHgiLCJsZXZlbCIsImN1cnJMZXZlbCIsImJvYXJkIiwiY29pbnNBcnIiLCJ0aWxlc0FyciIsInNwaWtlc0FyciIsIm1vbnN0ZXJzIiwidHJlZSIsIkltYWdlIiwic3JjIiwiZ3Jhc3MiLCJpbml0aWFsaXplQm9hcmQiLCJwb3NfeCIsInBvc195IiwidGVtcCIsImkiLCJsZW5ndGgiLCJqIiwidGlsZSIsIlRpbGUiLCJwdXNoIiwiY2hhcmFjdGVyIiwiQ2hhcmFjdGVyIiwiY29pbiIsIkNvaW4iLCJzcGlrZSIsIlNwaWtlIiwibW9uc3RlciIsIlNuYWlsIiwiRmFpcnkiLCJQaWciLCJudW1Db2lucyIsInRpbWUiLCJkcmF3SW1hZ2UiLCJyZW5kZXJUaWxlIiwicmVuZGVyQ29pbiIsInJlbmRlclNwaWtlIiwicmVuZGVyTW9uc3RlciIsInJlc3VsdCIsInVwZGF0ZSIsInJlbmRlckNoYXJhY3RlciIsInN0YXJ0WCIsInN0YXJ0WSIsImNoYXJhY3RlcldpZHRoIiwiY2hhcmFjdGVySGVpZ2h0IiwianVtcGluZyIsInhfdmVsb2NpdHkiLCJ5X3ZlbG9jaXR5IiwicG9zaXRpb24iLCJ5IiwicHJldlBvc2l0aW9uIiwic2V0U291bmQiLCJzZXRJbWFnZSIsImxlZnQiLCJyaWdodCIsInVwIiwiZXZlbnQiLCJrZXlDb2RlIiwiY29pblNvdW5kIiwiQXVkaW8iLCJ2b2x1bWUiLCJqdW1wU291bmQiLCJjaGFyYWN0ZXJJbWFnZSIsImxlZnRJbWFnZSIsInJpZ2h0SW1hZ2UiLCJzb3VuZCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJwbGF5IiwiY29pbnMiLCJzcGlrZXMiLCJ1cGRhdGVDaGFyYWN0ZXIiLCJoYW5kbGVFZGdlQ29sbGlzaW9uIiwidG9wIiwiYm90dG9tIiwidmFsdWUiLCJ0aWxlV2lkdGgiLCJ0aWxlSGVpZ2h0IiwiTWF0aCIsImZsb29yIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImhhbmRsZVRpbGVDb2xsaXNpb24iLCJnZXRSaWdodCIsImdldEJvdHRvbSIsInNldEJvdHRvbSIsImhhbmRsZU1vbnN0ZXJDb2xsaXNpb24iLCJoYW5kbGVTcGlrZUNvbGxpc2lvbiIsImhhbmRsZUNvaW5Db2xsaXNpb24iLCJzZXRQcmV2TGVmdCIsInNldExlZnQiLCJzZXRQcmV2UmlnaHQiLCJzZXRSaWdodCIsInNldFByZXZUb3AiLCJzZXRUb3AiLCJzZXRQcmV2Qm90dG9tIiwic3BsaWNlIiwidGlsZVgiLCJ0aWxlWSIsInRpbGVTaXplIiwiT2JqZWN0IiwidG9wVGlsZUNvbGxpc2lvbiIsImxlZnRUaWxlQ29sbGlzaW9uIiwicmlnaHRUaWxlQ29sbGlzaW9uIiwidG9wVGlsZSIsImdldFByZXZCb3R0b20iLCJsZWZ0VGlsZSIsImdldFByZXZSaWdodCIsInJpZ2h0VGlsZSIsImdldFByZXZMZWZ0IiwiYm90dG9tVGlsZSIsImdldFByZXZUb3AiLCJjb2luSW1hZ2UiLCJnZXRDb250ZXh0IiwiZ2FtZVJ1bm5pbmciLCJjdXJyZW50TGV2ZWwiLCJudW1EZWF0aHMiLCJtdXRlZCIsInJlbmRlckhvbWVTY3JlZW4iLCJhZGRMaXN0ZW5lcnMiLCJtZW51TXVzaWMiLCJsb29wIiwiZ2FtZU11c2ljIiwid2luTXVzaWMiLCJzZWxlY3RTb3VuZCIsInBhdXNlQWxsTXVzaWMiLCJjbGVhclJlY3QiLCJ0aXRsZUZvbnRTaXplIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VUZXh0Iiwib25sb2FkIiwiYmluZCIsInNsaW1lIiwiY2hlY2tFbnRlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuZXdHYW1lIiwiY2hlY2tFc2MiLCJjaGVja1Jlc3RhcnQiLCJmaWxsUmVjdCIsInJldHJ5Rm9udFNpemUiLCJlc2NGb250U2l6ZSIsInNhZFNsaW1lIiwiY29uZ3JhdHNGb250U2l6ZSIsImNoZXN0IiwicHJldlRpbWUiLCJsZXZlbHMiLCJMZXZlbHMiLCJtYXhMZXZlbCIsImdhbWVMb29wIiwidGltZXN0YW1wIiwicmVuZGVyRGVhdGhzIiwicmVuZGVyQ29pbnMiLCJ1cGRhdGVCb2FyZCIsInJlbmRlckdhbWVPdmVyIiwiaXNOYU4iLCJyZW5kZXJXaW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZWF0aHMiLCJNb25zdGVyIiwic3BlZWQiLCJzcGlrZUltYWdlIiwidGlsZUltYWdlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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LE1BQUwsR0FBY00sVUFBVSxHQUFHLEVBQTNCO0FBQ0EsU0FBS2tELFFBQUwsR0FBZ0I7QUFBRTVELE9BQUMsRUFBRXdCLEtBQUw7QUFBWXFDLE9BQUMsRUFBRXBDO0FBQWYsS0FBaEI7QUFDQSxTQUFLcUIsVUFBTDtBQUNEOzs7O2lDQUVZO0FBQ1gsVUFBTW1JLFNBQVMsR0FBRyxJQUFJN0osS0FBSixFQUFsQjtBQUNBNkosZUFBUyxDQUFDNUosR0FBVixHQUFnQiwyQkFBaEI7QUFDQSxXQUFLVixHQUFMLENBQVNrQyxTQUFULENBQ0VvSSxTQURGLEVBRUUsS0FBS3JILFFBQUwsQ0FBYzVELENBRmhCLEVBR0UsS0FBSzRELFFBQUwsQ0FBY0MsQ0FIaEIsRUFJRSxLQUFLeEQsS0FKUCxFQUtFLEtBQUtELE1BTFA7QUFPRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkgsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQ29pbkV4cGxvcmVyIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuY29uc3QgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuXG5jb25zdCB4ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMjgwcHgpXCIpO1xuaWYgKHgubWF0Y2hlcyl7XG4gIGdhbWVDYW52YXMuaGVpZ2h0ID0gXCI2MTJcIjtcbiAgZ2FtZUNhbnZhcy53aWR0aCA9IFwiODUwXCI7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbmV3IENvaW5FeHBsb3JlcihnYW1lQ2FudmFzKTtcbn0pO1xuXG4iLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL2NoYXJhY3RlclwiO1xuaW1wb3J0IFRpbGUgZnJvbSBcIi4vdGlsZVwiO1xuaW1wb3J0IENvaW4gZnJvbSBcIi4vY29pblwiO1xuaW1wb3J0IFNwaWtlIGZyb20gXCIuL3NwaWtlXCI7XG5pbXBvcnQgeyBTbmFpbCwgUGlnLCBGYWlyeSB9IGZyb20gXCIuL21vbnN0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQsIGN0eCwgbGV2ZWwsIGN1cnJMZXZlbCl7XG4gICAgXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jdXJyTGV2ZWwgPSBjdXJyTGV2ZWw7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLmJvYXJkID0gbGV2ZWw7XG4gICAgdGhpcy5jb2luc0FyciA9IFtdO1xuICAgIHRoaXMudGlsZXNBcnIgPSBbXTtcbiAgICB0aGlzLnNwaWtlc0FyciA9IFtdO1xuICAgIHRoaXMubW9uc3RlcnMgPSBbXTtcbiAgICB0aGlzLnRyZWUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnRyZWUuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmcvc2FrdXJhLnBuZ1wiO1xuICAgIHRoaXMuZ3Jhc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmdyYXNzLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3RpbGVzL2dyYXNzLnBuZ1wiO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUJvYXJkKCk7XG4gIH1cblxuICBpbml0aWFsaXplQm9hcmQoKSB7XG4gICAgXG4gICAgbGV0IHBvc194O1xuICAgIGxldCBwb3NfeTtcbiAgICBsZXQgdGVtcDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpKyspe1xuICAgICAgdGVtcCA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBvc195ID0gaSAqIHRoaXMuZ2FtZUhlaWdodCAvIDE4O1xuICAgICAgICBwb3NfeCA9IGogKiB0aGlzLmdhbWVXaWR0aCAvIDI1O1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PT0gXCIjXCIpe1xuICAgICAgICAgIGxldCB0aWxlID0gbmV3IFRpbGUocG9zX3gsIHBvc195LCB0aGlzLmN0eCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCwpO1xuICAgICAgICAgIHRlbXAucHVzaCh0aWxlKTtcbiAgICAgICAgICB0aGlzLnRpbGVzQXJyLnB1c2godGlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PT0gXCJQXCIpe1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcih0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0LCBwb3NfeCwgcG9zX3kpO1xuICAgICAgICAgIHRlbXAucHVzaCh0aGlzLmNoYXJhY3Rlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PT0gXCJDXCIpIHtcbiAgICAgICAgICBsZXQgY29pbiA9IG5ldyBDb2luKHBvc194LCBwb3NfeSwgdGhpcy5jdHgsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQsKTtcbiAgICAgICAgICB0ZW1wLnB1c2goY29pbik7XG4gICAgICAgICAgdGhpcy5jb2luc0Fyci5wdXNoKGNvaW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYm9hcmRbaV1bal0gPT09IFwiU1wiKSB7XG4gICAgICAgICAgbGV0IHNwaWtlID0gbmV3IFNwaWtlKHBvc194LCBwb3NfeSwgdGhpcy5jdHgsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQsKTtcbiAgICAgICAgICB0ZW1wLnB1c2goc3Bpa2UpO1xuICAgICAgICAgIHRoaXMuc3Bpa2VzQXJyLnB1c2goc3Bpa2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYm9hcmRbaV1bal0gPT09IFwiWlwiKSB7XG4gICAgICAgICAgbGV0IG1vbnN0ZXIgPSBuZXcgU25haWwocG9zX3gsIHBvc195LCB0aGlzLmN0eCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG4gICAgICAgICAgdGVtcC5wdXNoKG1vbnN0ZXIpO1xuICAgICAgICAgIHRoaXMubW9uc3RlcnMucHVzaChtb25zdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmJvYXJkW2ldW2pdID09PSBcIlhcIikge1xuICAgICAgICAgIGxldCBtb25zdGVyID0gbmV3IEZhaXJ5KHBvc194LCBwb3NfeSwgdGhpcy5jdHgsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpO1xuICAgICAgICAgIHRlbXAucHVzaChtb25zdGVyKTtcbiAgICAgICAgICB0aGlzLm1vbnN0ZXJzLnB1c2gobW9uc3Rlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PT0gXCJWXCIpIHtcbiAgICAgICAgICBsZXQgbW9uc3RlciA9IG5ldyBQaWcocG9zX3gsIHBvc195LCB0aGlzLmN0eCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG4gICAgICAgICAgdGVtcC5wdXNoKG1vbnN0ZXIpO1xuICAgICAgICAgIHRoaXMubW9uc3RlcnMucHVzaChtb25zdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0ZW1wLnB1c2goXCIgXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkW2ldID0gdGVtcDtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5udW1Db2lucyA9IHRoaXMuY29pbnNBcnIubGVuZ3RoO1xuICB9XG5cbiAgdXBkYXRlQm9hcmQodGltZSkge1xuICAgIGlmICghdGltZSkgcmV0dXJuO1xuXG4gICAgLy8gUmVuZGVyIGJhY2tncm91bmQgZW52aXJvbm1lbnRcbiAgICBpZiAodGhpcy5jdXJyTGV2ZWwgPT09IDEgJiYgdGhpcy5nYW1lV2lkdGggPiA5MDApIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnRyZWUsIHRoaXMuZ2FtZVdpZHRoIC8gMjUsIC0odGhpcy5nYW1lSGVpZ2h0IC8gMzYpLCB0aGlzLmdhbWVXaWR0aCAqIDAuMTc1LCB0aGlzLmdhbWVIZWlnaHQgLyAyLjQpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMudHJlZSwgdGhpcy5nYW1lV2lkdGggKiAwLjksIHRoaXMuZ2FtZUhlaWdodCAvIDksIHRoaXMuZ2FtZVdpZHRoICogMC4xMiwgdGhpcy5nYW1lSGVpZ2h0IC8gMy42KTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgdGlsZXNcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLnRpbGVzQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIHRoaXMudGlsZXNBcnJbaV0ucmVuZGVyVGlsZSgpO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciBDb2luc1xuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29pbnNBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5jb2luc0FycltpXS5yZW5kZXJDb2luKCk7XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIHNwaWtlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcGlrZXNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3Bpa2VzQXJyW2ldLnJlbmRlclNwaWtlKCk7XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIG1vbnN0ZXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vbnN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm1vbnN0ZXJzW2ldLnJlbmRlck1vbnN0ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgc2NvcmUgYW5kIGNoYXJhY3RlciBwb3NpdGlvblxuICAgIGxldCBudW1Db2lucyA9IHRoaXMuY29pbnNBcnIubGVuZ3RoO1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmNoYXJhY3Rlci51cGRhdGUodGhpcy5ib2FyZCwgdGhpcy5jb2luc0FyciwgdGhpcy5zcGlrZXNBcnIsIHRoaXMubW9uc3RlcnMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnYm9vbGVhbicpIHJldHVybiB0cnVlO1xuICAgIHRoaXMuY29pbnNBcnIgPSByZXN1bHQ7XG4gICAgXG4gICAgLy8gUmVuZGVyIGNoYXJhY3RlclxuICAgIHRoaXMuY2hhcmFjdGVyLnJlbmRlckNoYXJhY3Rlcih0aGlzLmN0eCk7XG4gICAgXG4gICAgcmV0dXJuIChudW1Db2lucyAtIHRoaXMuY29pbnNBcnIubGVuZ3RoKTtcbiAgfVxufSIsImltcG9ydCBUaWxlIGZyb20gXCIuL3RpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0LCBzdGFydFgsIHN0YXJ0WSkge1xuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gICAgdGhpcy5jaGFyYWN0ZXJXaWR0aCA9IHRoaXMuZ2FtZVdpZHRoIC8gMjUgLSAwLjAxO1xuICAgIHRoaXMuY2hhcmFjdGVySGVpZ2h0ID0gdGhpcy5nYW1lSGVpZ2h0IC8gMTggLSAwLjAxO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMueF92ZWxvY2l0eSA9IDA7XG4gICAgdGhpcy55X3ZlbG9jaXR5ID0gMDtcbiAgICB0aGlzLnBvc2l0aW9uID0geyB4OiBzdGFydFgsIHk6IHN0YXJ0WSB9XG4gICAgdGhpcy5wcmV2UG9zaXRpb24gPSB7IHg6IHN0YXJ0WCwgeTogc3RhcnRZIH1cbiAgICB0aGlzLnNldFNvdW5kKCk7XG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuXG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMudXAgPSBmYWxzZTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgdGhpcy51cCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBnZXRMZWZ0KCkgeyByZXR1cm4gdGhpcy5wb3NpdGlvbi54IH1cbiAgZ2V0UmlnaHQoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmNoYXJhY3RlcldpZHRoIH1cbiAgZ2V0VG9wKCkgeyByZXR1cm4gdGhpcy5wb3NpdGlvbi55IH1cbiAgZ2V0Qm90dG9tKCkgeyByZXR1cm4gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5jaGFyYWN0ZXJIZWlnaHQgfVxuXG4gIGdldFByZXZMZWZ0KCkgeyByZXR1cm4gdGhpcy5wcmV2UG9zaXRpb24ueCB9XG4gIGdldFByZXZSaWdodCgpIHsgcmV0dXJuIHRoaXMucHJldlBvc2l0aW9uLnggKyB0aGlzLmNoYXJhY3RlcldpZHRoIH1cbiAgZ2V0UHJldlRvcCgpIHsgcmV0dXJuIHRoaXMucHJldlBvc2l0aW9uLnkgfVxuICBnZXRQcmV2Qm90dG9tKCkgeyByZXR1cm4gdGhpcy5wcmV2UG9zaXRpb24ueSArIHRoaXMuY2hhcmFjdGVySGVpZ2h0IH1cblxuICBzZXRMZWZ0KHgpIHsgdGhpcy5wb3NpdGlvbi54ID0geH1cbiAgc2V0UmlnaHQoeCkgeyB0aGlzLnBvc2l0aW9uLnggPSB4IC0gdGhpcy5jaGFyYWN0ZXJXaWR0aCB9XG4gIHNldFRvcCh5KSB7IHRoaXMucG9zaXRpb24ueSA9IHkgfVxuICBzZXRCb3R0b20oeSkgeyB0aGlzLnBvc2l0aW9uLnkgPSB5IC0gdGhpcy5jaGFyYWN0ZXJIZWlnaHQgfVxuXG4gIHNldFByZXZMZWZ0KHgpIHsgdGhpcy5wcmV2UG9zaXRpb24ueCA9IHggfVxuICBzZXRQcmV2UmlnaHQoeCkgeyB0aGlzLnByZXZQb3NpdGlvbi54ID0geCAtIHRoaXMuY2hhcmFjdGVyV2lkdGggfVxuICBzZXRQcmV2VG9wKHkpIHsgdGhpcy5wcmV2UG9zaXRpb24ueSA9IHkgfVxuICBzZXRQcmV2Qm90dG9tKHkpIHsgdGhpcy5wcmV2UG9zaXRpb24ueSA9IHkgLSB0aGlzLmNoYXJhY3RlckhlaWdodCB9XG5cbiAgc2V0U291bmQoKSB7XG4gICAgdGhpcy5jb2luU291bmQgPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9zb3VuZC9jb2luLXNvdW5kLm1wM1wiKTtcbiAgICB0aGlzLmNvaW5Tb3VuZC52b2x1bWUgPSAwLjM7XG4gICAgdGhpcy5qdW1wU291bmQgPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9zb3VuZC9qdW1wLm1wM1wiKTtcbiAgICB0aGlzLmp1bXBTb3VuZC52b2x1bWUgPSAwLjc7XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICB0aGlzLmNoYXJhY3RlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jaGFyYWN0ZXJJbWFnZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9zbGltZS9zbGltZS5wbmdcIjtcbiAgICB0aGlzLmxlZnRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubGVmdEltYWdlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3NsaW1lL2xlZnQtc2xpbWUucG5nXCI7XG4gICAgdGhpcy5yaWdodEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5yaWdodEltYWdlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3NsaW1lL3JpZ2h0LXNsaW1lLnBuZ1wiO1xuICB9XG5cbiAgcGxheShzb3VuZCkge1xuICAgIHNvdW5kLnBhdXNlKCk7XG4gICAgc291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgIHNvdW5kLnBsYXkoKTtcbiAgfVxuXG4gIHJlbmRlckNoYXJhY3RlcihjdHgpIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5jaGFyYWN0ZXJJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMuY2hhcmFjdGVyV2lkdGgsXG4gICAgICB0aGlzLmNoYXJhY3RlckhlaWdodFxuICAgICk7XG4gIH1cblxuICB1cGRhdGVDaGFyYWN0ZXIoKSB7XG4gICAgXG4gICAgaWYgKHRoaXMudXAgJiYgdGhpcy5qdW1waW5nID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnBsYXkodGhpcy5qdW1wU291bmQpO1xuICAgICAgdGhpcy55X3ZlbG9jaXR5IC09IHRoaXMuZ2FtZUhlaWdodCAvIDIwO1xuICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGVmdCkge1xuICAgICAgdGhpcy5jaGFyYWN0ZXJJbWFnZSA9IHRoaXMubGVmdEltYWdlO1xuICAgICAgdGhpcy54X3ZlbG9jaXR5IC09IDAuOTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmlnaHQpIHtcbiAgICAgIHRoaXMuY2hhcmFjdGVySW1hZ2UgPSB0aGlzLnJpZ2h0SW1hZ2U7XG4gICAgICB0aGlzLnhfdmVsb2NpdHkgKz0gMC45O1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnlfdmVsb2NpdHkgKz0gMS4zO1xuXG4gICAgdGhpcy5wcmV2UG9zaXRpb24ueCA9IHRoaXMucG9zaXRpb24ueDtcbiAgICB0aGlzLnByZXZQb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55O1xuXG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMueF92ZWxvY2l0eTtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy55X3ZlbG9jaXR5O1xuICAgIHRoaXMueF92ZWxvY2l0eSAqPSAwLjg1O1xuICAgIHRoaXMueV92ZWxvY2l0eSAqPSAwLjg1O1xuICB9XG5cbiAgdXBkYXRlKGJvYXJkLCBjb2lucywgc3Bpa2VzLCBtb25zdGVycykge1xuXG4gICAgdGhpcy51cGRhdGVDaGFyYWN0ZXIoKTtcblxuICAgIHRoaXMuaGFuZGxlRWRnZUNvbGxpc2lvbigpO1xuXG4gICAgLy8gaGFuZGxlIHRpbGUgY29sbGlzaW9uIFxuICAgIGxldCBsZWZ0O1xuICAgIGxldCByaWdodDtcbiAgICBsZXQgdG9wO1xuICAgIGxldCBib3R0b207XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgbGV0IHRpbGVXaWR0aCA9IHRoaXMuZ2FtZVdpZHRoIC8gMjU7XG4gICAgbGV0IHRpbGVIZWlnaHQgPSB0aGlzLmdhbWVIZWlnaHQgLyAxODtcblxuICAgIHRvcCA9IE1hdGguZmxvb3IodGhpcy5nZXRUb3AoKSAvIHRpbGVIZWlnaHQpO1xuICAgIGxlZnQgPSBNYXRoLmZsb29yKHRoaXMuZ2V0TGVmdCgpIC8gdGlsZVdpZHRoKTtcbiAgICB2YWx1ZSA9IGJvYXJkW3RvcF1bbGVmdF07XG4gICAgdGhpcy5oYW5kbGVUaWxlQ29sbGlzaW9uKHZhbHVlLCBsZWZ0ICogdGlsZVdpZHRoLCB0b3AgKiB0aWxlSGVpZ2h0LCB0aWxlV2lkdGgpO1xuXG4gICAgdG9wID0gTWF0aC5mbG9vcih0aGlzLmdldFRvcCgpIC8gdGlsZUhlaWdodCk7XG4gICAgcmlnaHQgPSBNYXRoLmZsb29yKHRoaXMuZ2V0UmlnaHQoKSAvIHRpbGVXaWR0aCk7XG4gICAgdmFsdWUgPSBib2FyZFt0b3BdW3JpZ2h0XTtcbiAgICB0aGlzLmhhbmRsZVRpbGVDb2xsaXNpb24odmFsdWUsIHJpZ2h0ICogdGlsZVdpZHRoLCB0b3AgKiB0aWxlSGVpZ2h0LCB0aWxlV2lkdGgpO1xuXG4gICAgYm90dG9tID0gTWF0aC5mbG9vcih0aGlzLmdldEJvdHRvbSgpIC8gdGlsZUhlaWdodCk7XG4gICAgYm90dG9tID0gKGJvdHRvbSA+IDE3ID8gMTcgOiBib3R0b20pO1xuICAgIGxlZnQgPSBNYXRoLmZsb29yKHRoaXMuZ2V0TGVmdCgpIC8gdGlsZVdpZHRoKTtcbiAgICB2YWx1ZSA9IGJvYXJkW2JvdHRvbV1bbGVmdF07XG4gICAgdGhpcy5oYW5kbGVUaWxlQ29sbGlzaW9uKHZhbHVlLCBsZWZ0ICogdGlsZVdpZHRoLCBib3R0b20gKiB0aWxlSGVpZ2h0LCB0aWxlV2lkdGgpO1xuXG4gICAgYm90dG9tID0gTWF0aC5mbG9vcih0aGlzLmdldEJvdHRvbSgpIC8gdGlsZUhlaWdodCk7XG4gICAgYm90dG9tID0gKGJvdHRvbSA+IDE3ID8gMTcgOiBib3R0b20pO1xuICAgIHJpZ2h0ID0gTWF0aC5mbG9vcih0aGlzLmdldFJpZ2h0KCkgLyB0aWxlV2lkdGgpO1xuICAgIHZhbHVlID0gYm9hcmRbYm90dG9tXVtyaWdodF07XG4gICAgdGhpcy5oYW5kbGVUaWxlQ29sbGlzaW9uKHZhbHVlLCByaWdodCAqIHRpbGVXaWR0aCwgYm90dG9tICogdGlsZUhlaWdodCwgdGlsZVdpZHRoKTtcblxuICAgIGlmICh0aGlzLmdldEJvdHRvbSgpID4gdGhpcy5nYW1lSGVpZ2h0KSB0aGlzLnNldEJvdHRvbSh0aGlzLmdhbWVIZWlnaHQpO1xuXG4gICAgaWYgKHRoaXMuaGFuZGxlTW9uc3RlckNvbGxpc2lvbihtb25zdGVycykpIHJldHVybiB0cnVlO1xuICAgIGlmICh0aGlzLmhhbmRsZVNwaWtlQ29sbGlzaW9uKHNwaWtlcykpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLmhhbmRsZUNvaW5Db2xsaXNpb24oY29pbnMpOyAgIFxuICB9XG5cbiAgaGFuZGxlRWRnZUNvbGxpc2lvbigpIHtcbiAgICBpZiAodGhpcy5nZXRMZWZ0KCkgPCAwKSB7XG4gICAgICB0aGlzLnNldFByZXZMZWZ0KHRoaXMuZ2V0TGVmdCgpKTtcbiAgICAgIHRoaXMuc2V0TGVmdCgwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0UmlnaHQoKSA+IHRoaXMuZ2FtZVdpZHRoKXtcbiAgICAgIHRoaXMuc2V0UHJldlJpZ2h0KHRoaXMuZ2V0UmlnaHQoKSk7XG4gICAgICB0aGlzLnNldFJpZ2h0KHRoaXMuZ2FtZVdpZHRoKTtcbiAgICB9IFxuICAgIGlmICh0aGlzLmdldFRvcCgpIDwgMCl7XG4gICAgICB0aGlzLnNldFByZXZUb3AodGhpcy5nZXRUb3AoKSk7XG4gICAgICB0aGlzLnNldFRvcCgwKTtcbiAgICB9IFxuICAgIGlmICh0aGlzLmdldEJvdHRvbSgpID4gdGhpcy5nYW1lSGVpZ2h0KXtcbiAgICAgIHRoaXMuc2V0UHJldkJvdHRvbSh0aGlzLmdldEJvdHRvbSgpKTtcbiAgICAgIHRoaXMuc2V0Qm90dG9tKHRoaXMuZ2FtZUhlaWdodCk7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB9IFxuICB9XG5cbiAgaGFuZGxlQ29pbkNvbGxpc2lvbihjb2lucykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29pbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nZXRMZWZ0KCkgPCBjb2luc1tpXS5wb3NpdGlvbi54ICsgY29pbnNbaV0ud2lkdGggJiZcbiAgICAgICAgdGhpcy5nZXRMZWZ0KCkgKyBjb2luc1tpXS53aWR0aCA+IGNvaW5zW2ldLnBvc2l0aW9uLnggJiZcbiAgICAgICAgdGhpcy5nZXRUb3AoKSA8IGNvaW5zW2ldLnBvc2l0aW9uLnkgKyBjb2luc1tpXS5oZWlnaHQgJiZcbiAgICAgICAgdGhpcy5nZXRCb3R0b20oKSA+IGNvaW5zW2ldLnBvc2l0aW9uLnkpIHtcbiAgICAgICAgdGhpcy5wbGF5KHRoaXMuY29pblNvdW5kKTtcbiAgICAgICAgY29pbnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29pbnM7XG4gIH1cblxuICBoYW5kbGVTcGlrZUNvbGxpc2lvbihzcGlrZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwaWtlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmdldExlZnQoKSA8IHNwaWtlc1tpXS5wb3NpdGlvbi54ICsgc3Bpa2VzW2ldLndpZHRoICYmXG4gICAgICAgIHRoaXMuZ2V0TGVmdCgpICsgc3Bpa2VzW2ldLndpZHRoID4gc3Bpa2VzW2ldLnBvc2l0aW9uLnggJiZcbiAgICAgICAgdGhpcy5nZXRUb3AoKSA8IHNwaWtlc1tpXS5wb3NpdGlvbi55ICsgc3Bpa2VzW2ldLmhlaWdodCAmJlxuICAgICAgICB0aGlzLmdldEJvdHRvbSgpID4gc3Bpa2VzW2ldLnBvc2l0aW9uLnkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZU1vbnN0ZXJDb2xsaXNpb24obW9uc3RlcnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vbnN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZ2V0TGVmdCgpIDwgbW9uc3RlcnNbaV0ucG9zaXRpb24ueCArIG1vbnN0ZXJzW2ldLndpZHRoICYmXG4gICAgICAgIHRoaXMuZ2V0UmlnaHQoKSA+IG1vbnN0ZXJzW2ldLnBvc2l0aW9uLnggJiZcbiAgICAgICAgdGhpcy5nZXRUb3AoKSA8IG1vbnN0ZXJzW2ldLnBvc2l0aW9uLnkgKyBtb25zdGVyc1tpXS5oZWlnaHQgJiZcbiAgICAgICAgdGhpcy5nZXRCb3R0b20oKSA+IG1vbnN0ZXJzW2ldLnBvc2l0aW9uLnkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZVRpbGVDb2xsaXNpb24odmFsdWUsIHRpbGVYLCB0aWxlWSwgdGlsZVNpemUpe1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiB2YWx1ZSBpbnN0YW5jZW9mIFRpbGUpe1xuICAgICAgaWYgKHRoaXMudG9wVGlsZUNvbGxpc2lvbih0aWxlWSkpIHJldHVybjtcbiAgICAgIGlmICh0aGlzLmxlZnRUaWxlQ29sbGlzaW9uKHRpbGVYKSkgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMucmlnaHRUaWxlQ29sbGlzaW9uKHRpbGVYICsgdGlsZVNpemUpKSByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdG9wVGlsZUNvbGxpc2lvbih0b3BUaWxlKSB7XG4gICAgaWYgKHRoaXMuZ2V0Qm90dG9tKCkgPiB0b3BUaWxlICYmIHRoaXMuZ2V0UHJldkJvdHRvbSgpIDw9IHRvcFRpbGUpIHtcbiAgICAgIHRoaXMuc2V0UHJldkJvdHRvbSh0aGlzLmdldEJvdHRvbSgpKTtcbiAgICAgIHRoaXMuc2V0Qm90dG9tKHRvcFRpbGUgLSAwLjAxKTtcbiAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxlZnRUaWxlQ29sbGlzaW9uKGxlZnRUaWxlKXtcbiAgICBpZiAodGhpcy5nZXRSaWdodCgpID4gbGVmdFRpbGUgJiYgdGhpcy5nZXRQcmV2UmlnaHQoKSA8PSBsZWZ0VGlsZSl7XG4gICAgICB0aGlzLnNldFByZXZSaWdodCh0aGlzLmdldFJpZ2h0KCkpO1xuICAgICAgdGhpcy5zZXRSaWdodChsZWZ0VGlsZSAtIDAuMDEpO1xuICAgICAgcmV0dXJuIHRydWU7IFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByaWdodFRpbGVDb2xsaXNpb24ocmlnaHRUaWxlKXtcbiAgICBpZiAodGhpcy5nZXRMZWZ0KCkgPCByaWdodFRpbGUgJiYgdGhpcy5nZXRQcmV2TGVmdCgpID49IHJpZ2h0VGlsZSl7XG4gICAgICB0aGlzLnNldFByZXZMZWZ0KHRoaXMuZ2V0TGVmdCgpKTtcbiAgICAgIHRoaXMuc2V0TGVmdChyaWdodFRpbGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGJvdHRvbVRpbGVDb2xsaXNpb24oYm90dG9tVGlsZSkge1xuICAgIGlmICh0aGlzLmdldFRvcCgpIDwgYm90dG9tVGlsZSAmJiB0aGlzLmdldFByZXZUb3AoKSA+PSBib3R0b21UaWxlKSB7XG4gICAgICB0aGlzLnNldFByZXZUb3AodGhpcy5nZXRUb3AoKSk7XG4gICAgICB0aGlzLnNldFRvcChib3R0b21UaWxlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW4ge1xuICBjb25zdHJ1Y3Rvcihwb3NfeCwgcG9zX3ksIGN0eCwgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy53aWR0aCA9IGdhbWVXaWR0aCAvIDI1O1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodCAvIDE4O1xuICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IHBvc194LCB5OiBwb3NfeSB9XG4gICAgdGhpcy5yZW5kZXJDb2luKCk7XG4gIH1cblxuICByZW5kZXJDb2luKCkge1xuICAgIGNvbnN0IGNvaW5JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvaW5JbWFnZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9pdGVtcy9jb2luLWdvbGQucG5nXCI7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgY29pbkltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG59IiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgTGV2ZWxzIGZyb20gXCIuL2xldmVsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luRXhwbG9yZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lQ2FudmFzKXtcbiAgICB0aGlzLmN0eCA9IGdhbWVDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZUNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lQ2FudmFzLmhlaWdodDtcbiAgICB0aGlzLmdhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xuICAgIHRoaXMubnVtRGVhdGhzID0gMDtcbiAgICB0aGlzLm11dGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZXRTb3VuZCgpO1xuICAgIHRoaXMucmVuZGVySG9tZVNjcmVlbigpO1xuICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBzZXRTb3VuZCgpIHtcbiAgICB0aGlzLm1lbnVNdXNpYyA9IG5ldyBBdWRpbyhcIi4vc3JjL2F1ZGlvL211c2ljL21haW4tbWVudS5tcDNcIik7XG4gICAgdGhpcy5tZW51TXVzaWMudm9sdW1lID0gMC4yO1xuICAgIHRoaXMubWVudU11c2ljLmxvb3AgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZU11c2ljID0gbmV3IEF1ZGlvKFwiLi9zcmMvYXVkaW8vbXVzaWMvYmFja2dyb3VuZC5tcDNcIik7XG4gICAgdGhpcy5nYW1lTXVzaWMudm9sdW1lID0gMC40O1xuICAgIHRoaXMuZ2FtZU11c2ljLmxvb3AgPSB0cnVlO1xuICAgIHRoaXMud2luTXVzaWMgPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9tdXNpYy92aWN0b3J5Lm1wM1wiKTtcbiAgICB0aGlzLndpbk11c2ljLmxvb3AgPSB0cnVlO1xuICAgIHRoaXMud2luTXVzaWMudm9sdW1lID0gMC4xNTtcbiAgICB0aGlzLnNlbGVjdFNvdW5kID0gbmV3IEF1ZGlvKFwiLi9zcmMvYXVkaW8vc291bmQvc2VsZWN0LndhdlwiKTtcbiAgfVxuXG4gIHBsYXkoc291bmQpIHtcbiAgICBpZiAodGhpcy5tdXRlZCkgcmV0dXJuO1xuICAgIHNvdW5kLnBhdXNlKCk7XG4gICAgc291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgIHNvdW5kLnBsYXkoKTtcbiAgfVxuXG4gIHBhdXNlQWxsTXVzaWMoKXtcbiAgICB0aGlzLm1lbnVNdXNpYy5wYXVzZSgpO1xuICAgIHRoaXMuZ2FtZU11c2ljLnBhdXNlKCk7XG4gICAgdGhpcy53aW5NdXNpYy5wYXVzZSgpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAoIXRoaXMuZ2FtZVJ1bm5pbmcgJiYgIXRoaXMubXV0ZWQpIHtcbiAgICAgICAgdGhpcy5tZW51TXVzaWMucGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICAvLyBtIGtleVxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDc3KXtcbiAgICAgICAgaWYgKHRoaXMubXV0ZWQpe1xuICAgICAgICAgIGlmICh0aGlzLmdhbWVSdW5uaW5nKXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU11c2ljLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lbnVNdXNpYy5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhdXNlQWxsTXVzaWMoKTtcbiAgICAgICAgICB0aGlzLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICByZW5kZXJIb21lU2NyZWVuKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KTtcblxuICAgIGNvbnN0IHRpdGxlRm9udFNpemUgPSB0aGlzLmdhbWVXaWR0aCA+IDkwMCA/IDgwIDogNjU7XG5cbiAgICB0aGlzLmN0eC5mb250ID0gYGJvbGQgJHt0aXRsZUZvbnRTaXplfXB4IEFyaWFsYDtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiQ09JTiBFWFBMT1JFUlwiLCAwLjE3ICogdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodC8yLjQpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KFwiQ09JTiBFWFBMT1JFUlwiLCAwLjE3ICogdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCAvIDIuNCk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsdWVcIlxuICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgMzBweCBBcmlhbFwiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgRW50ZXIgdG8gQmVnaW4hXCIsIHRoaXMuZ2FtZVdpZHRoIC8gMi44NTcsIHRoaXMuZ2FtZUhlaWdodCAvIDEuNDQpO1xuXG4gICAgdGhpcy5jdHguZm9udCA9IFwiYm9sZCAyMHB4IEFyaWFsXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBlc2MgdG8gZ28gYmFjayB0byBob21lIHNjcmVlblwiLCB0aGlzLmdhbWVXaWR0aCAvIDIuOTQxLCB0aGlzLmdhbWVIZWlnaHQgLyAxLjI4NTcpO1xuXG4gICAgY29uc3QgY29pbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvaW4uc3JjID0gXCIuL3NyYy9pbWFnZXMvaXRlbXMvY29pbi1nb2xkLnBuZ1wiO1xuICAgIGNvaW4ub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGNvaW4sIHRoaXMuZ2FtZVdpZHRoICogMC4yOCwgdGhpcy5nYW1lSGVpZ2h0IC8gMS41MzIsIDQwLCA0MCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3Qgc2xpbWUgPSBuZXcgSW1hZ2UoKTtcbiAgICBzbGltZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9zbGltZS9zbGltZS5wbmdcIjtcbiAgICBzbGltZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShzbGltZSwgdGhpcy5nYW1lV2lkdGggKiAwLjI4LCB0aGlzLmdhbWVIZWlnaHQgLyAxLjM1ODUsIDQwLCA0MCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jaGVja0VudGVyID0gdGhpcy5jaGVja0VudGVyLmJpbmQodGhpcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY2hlY2tFbnRlcik7XG4gIH1cblxuICBjaGVja0VudGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBcbiAgICAgIHRoaXMucGxheSh0aGlzLnNlbGVjdFNvdW5kKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNoZWNrRW50ZXIpO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgdGhpcy5uZXdHYW1lKCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tFc2MoZXZlbnQpe1xuICAgIC8vIGVzYyBrZXlcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNoZWNrRXNjKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNoZWNrUmVzdGFydCk7XG4gICAgICB0aGlzLmdhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnBhdXNlQWxsTXVzaWMoKTtcbiAgICAgIHRoaXMucGxheSh0aGlzLnNlbGVjdFNvdW5kKTtcbiAgICAgIHRoaXMucGxheSh0aGlzLm1lbnVNdXNpYyk7XG4gICAgICB0aGlzLnJlbmRlckhvbWVTY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJHYW1lT3ZlcigpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG5cbiAgICBjb25zdCB0aXRsZUZvbnRTaXplID0gdGhpcy5nYW1lV2lkdGggPiA5MDAgPyA4MCA6IDY1O1xuICAgIGNvbnN0IHJldHJ5Rm9udFNpemUgPSB0aGlzLmdhbWVXaWR0aCA+IDkwMCA/IDMwIDogMjU7XG4gICAgY29uc3QgZXNjRm9udFNpemUgPSB0aGlzLmdhbWVXaWR0aCA+IDkwMD8gMjAgOiAxNTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSBgYm9sZCAke3RpdGxlRm9udFNpemV9cHggQXJpYWxgO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCB0aGlzLmdhbWVXaWR0aCAqIDAuMjUsIHRoaXMuZ2FtZUhlaWdodCAvIDIuNCk7XG5cbiAgICB0aGlzLmN0eC5mb250ID0gYGJvbGQgJHtyZXRyeUZvbnRTaXplfXB4IEFyaWFsYDtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIHIga2V5IHRvIHJldHJ5IGxldmVsXCIsIHRoaXMuZ2FtZVdpZHRoICogMC4zMjUsIHRoaXMuZ2FtZUhlaWdodCAvIDEuNDQpO1xuXG4gICAgdGhpcy5jdHguZm9udCA9IGBib2xkICR7ZXNjRm9udFNpemV9cHggQXJpYWxgO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgZXNjIHRvIGdvIGJhY2sgdG8gaG9tZSBzY3JlZW5cIiwgdGhpcy5nYW1lV2lkdGggKiAwLjMyNSwgdGhpcy5nYW1lSGVpZ2h0IC8gMS4yODU3KTtcblxuICAgIGNvbnN0IHNhZFNsaW1lID0gbmV3IEltYWdlKCk7XG4gICAgc2FkU2xpbWUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNhZFNsaW1lLCB0aGlzLmdhbWVXaWR0aCAqIDAuNzMsIHRoaXMuZ2FtZUhlaWdodCAvIDEuNDQsIHRoaXMuZ2FtZVdpZHRoICogMC4yOTgsIHRoaXMuZ2FtZUhlaWdodCAvIDMuNik7XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIHNhZFNsaW1lLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3NsaW1lL3NhZC1zbGltZS5wbmdcIjtcblxuICAgIHRoaXMuY2hlY2tSZXN0YXJ0ID0gdGhpcy5jaGVja1Jlc3RhcnQuYmluZCh0aGlzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jaGVja1Jlc3RhcnQpO1xuICB9XG5cbiAgY2hlY2tSZXN0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDgyKSB7XG4gICAgICB0aGlzLnBsYXkodGhpcy5zZWxlY3RTb3VuZCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jaGVja1Jlc3RhcnQpO1xuICAgICAgdGhpcy5nYW1lUnVubmluZyA9IHRydWU7XG4gICAgICB0aGlzLm5ld0dhbWUoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJXaW4oKSB7XG4gICAgdGhpcy5nYW1lTXVzaWMucGF1c2UoKTtcbiAgICB0aGlzLnBsYXkodGhpcy53aW5NdXNpYyk7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpO1xuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpO1xuXG4gICAgY29uc3QgdGl0bGVGb250U2l6ZSA9IHRoaXMuZ2FtZVdpZHRoID4gOTAwID8gODAgOiA2NTtcbiAgICBjb25zdCBjb25ncmF0c0ZvbnRTaXplID0gdGhpcy5nYW1lV2lkdGggPiA5MDAgPyAzMCA6IDI1O1xuICAgIGNvbnN0IGVzY0ZvbnRTaXplID0gdGhpcy5nYW1lV2lkdGggPiA5MDAgPyAyMCA6IDE1O1xuXG4gICAgdGhpcy5jdHguZm9udCA9IGBib2xkICR7dGl0bGVGb250U2l6ZX1weCBBcmlhbGA7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWU9VIFdJTiFcIiwgdGhpcy5nYW1lV2lkdGggKiAwLjMwNSwgdGhpcy5nYW1lSGVpZ2h0IC8gMy42KTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSBgYm9sZCAke2NvbmdyYXRzRm9udFNpemV9cHggQXJpYWxgO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiQ29uZ3JhdHMgb24gYmVhdGluZyB0aGUgZ2FtZSFcIiwgdGhpcy5nYW1lV2lkdGggKiAwLjI4LCB0aGlzLmdhbWVIZWlnaHQgLyAxLjUpO1xuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibHVlXCJcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgWW91IGRpZWQgYSB0b3RhbCBvZiAke3RoaXMubnVtRGVhdGhzfSB0aW1lc2AsIHRoaXMuZ2FtZVdpZHRoICogMC4zMjIsIHRoaXMuZ2FtZUhlaWdodCAvIDEuMjg1Nyk7XG4gICAgXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguZm9udCA9IGBib2xkICR7ZXNjRm9udFNpemV9cHggQXJpYWxgO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgZXNjIHRvIGdvIGJhY2sgdG8gaG9tZSBzY3JlZW5cIiwgdGhpcy5nYW1lV2lkdGggKiAwLjMyNSwgdGhpcy5nYW1lSGVpZ2h0IC8gMS4xMjUpO1xuXG4gICAgY29uc3QgY2hlc3QgPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY2hlc3QsIHRoaXMuZ2FtZVdpZHRoICogMC40MywgdGhpcy5nYW1lSGVpZ2h0IC8gMi44OCwgdGhpcy5nYW1lV2lkdGggKiAwLjEzOSwgdGhpcy5nYW1lSGVpZ2h0IC8gNC44MzIpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgICBjaGVzdC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9pdGVtcy9jaGVzdC1nb2xkLWNsb3NlLnBuZ1wiO1xuICB9XG5cbiAgbmV3R2FtZSgpe1xuICAgIGlmICghdGhpcy5nYW1lUnVubmluZyl7XG4gICAgICB0aGlzLm1lbnVNdXNpYy5wYXVzZSgpXG4gICAgICB0aGlzLnBsYXkodGhpcy5nYW1lTXVzaWMpO1xuICAgICAgdGhpcy5udW1EZWF0aHMgPSAwO1xuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jaGVja0VzYyk7XG4gICAgdGhpcy5jaGVja0VzYyA9IHRoaXMuY2hlY2tFc2MuYmluZCh0aGlzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jaGVja0VzYyk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgdGhpcy5nYW1lUnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5jb2lucyA9IDA7XG4gICAgdGhpcy50aW1lID0gNjA7XG4gICAgdGhpcy5wcmV2VGltZSA9IDA7XG4gICAgdGhpcy5sZXZlbHMgPSBMZXZlbHMoKTtcbiAgICB0aGlzLm1heExldmVsID0gdGhpcy5sZXZlbHMubGVuZ3RoIC0gMTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQsIHRoaXMuY3R4LCB0aGlzLmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0sIHRoaXMuY3VycmVudExldmVsKTtcbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgfVxuXG4gIGdhbWVMb29wKHRpbWVzdGFtcCkge1xuICAgIGlmICghdGhpcy5nYW1lUnVubmluZykgcmV0dXJuO1xuICBcbiAgICBsZXQgdGltZSA9IHRpbWVzdGFtcCAtIHRoaXMucHJldlRpbWU7XG4gICAgdGhpcy5wcmV2VGltZSA9IHRpbWVzdGFtcDtcblxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KTtcblxuICAgIHRoaXMucmVuZGVyRGVhdGhzKHRoaXMubnVtRGVhdGhzKTtcbiAgICB0aGlzLnJlbmRlckNvaW5zKHRoaXMuY29pbnMpO1xuXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYm9hcmQudXBkYXRlQm9hcmQodGltZSk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdib29sZWFuJyl7XG4gICAgICB0aGlzLm51bURlYXRocyArPSAxO1xuICAgICAgdGhpcy5yZW5kZXJHYW1lT3ZlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29pbnMgKz0gKGlzTmFOKHJlc3VsdCkgPyAwIDogcmVzdWx0KTtcbiAgICBpZiAodGhpcy5jb2lucyA+PSB0aGlzLmJvYXJkLm51bUNvaW5zKXtcbiAgICAgIFxuICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5tYXhMZXZlbCl7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsICs9IDE7XG4gICAgICAgIHRoaXMubmV3R2FtZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyV2luKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcbiAgfVxuXG4gIHJlbmRlckRlYXRocyhkZWF0aHMpIHtcbiAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJEZWF0aHM6XCIsIDEwLCAzMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoZGVhdGhzLCA5MCwgMzApO1xuICB9XG5cbiAgcmVuZGVyQ29pbnMoY29pbnMpe1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIkNvaW5zOlwiLCB0aGlzLmdhbWVXaWR0aCAtIDExMCwgMzApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGNvaW5zLCB0aGlzLmdhbWVXaWR0aCAtIDQwLCAzMCk7XG4gIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFtbXSxcblxuICAgW1wiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgIEMgQyBDIEMgQyBDICAgICAgIFwiLFxuICAgIFwiICAgICAgICMjIyMjIyMjIyMjIyAgICAgIFwiLFxuICAgIFwiICAgICAjICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgIyAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICMgICAgICAgICAgICAgICAgICAgIFggIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiIyMjIyMjIyMjIyMjIyMjIyMjIyAgICAjI1wiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAjIyAgIFwiLFxuICAgIFwiQyAgICAgQyBDIEMgQyBDIEMgQyAgICAgIFwiLFxuICAgIFwiIyAgICAgIyMjIyMjIyMjIyMjIyAgICAgIFwiLFxuICAgIFwiIyNDICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiIyMjI1MgICAgICAgICAgICAgICBTU1NTU1wiLFxuICAgIFwiIyMjIyMjIEMgICAgICAgICAgICAjIyMjI1wiLFxuICAgIFwiICAgICAgICMgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgIyAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgUCAgICAgICAgVlwiLFxuICAgIFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiXSxcblxuICAgIFxuICAgW1wiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgIEMgICBDICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgIyMgICAjICAgWFwiLFxuICAgIFwiICAgICAgICAgICAgIEMgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgIyMgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgIEMgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgIyMgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgIEMgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgIyMgICAgU1NTU1NTU1NTU1NTU1wiLFxuICAgIFwiICAgQyAgICAgICAgIyMjIyMjIyMjIyMjI1wiLFxuICAgIFwiICAgIyMgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgIEMgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICMjICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICBDICAgICAgICAgICAgWFwiLFxuICAgIFwiICAgICAgICAgICAjIyAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgUCAgICAgICAgIFwiLFxuICAgIFwiI1NTU1NTU1NTU1NTU1MjIyNTU1NTU1NTU1wiXSxcblxuICAgW1wiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgWFwiLFxuICAgIFwiQ0NDQyAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiIyMjIyAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgIyMgICBDICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAjIyAgQyAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgQyAgICAgIyMgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAjIyAgICAgICAgQyAgICAgQ1wiLFxuICAgIFwiICAgICAgQyAgICAgICAgICAgIyMgICAgIFwiLFxuICAgIFwiICAgICAjIyAgICAgICAgICAgICAgICAgU1wiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICMjI1wiLFxuICAgIFwiICBTQyAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAjIyAgICAgICAgICAgIENTICMjICAgIFwiLFxuICAgIFwiICAgICAgQ1MgICAgICAgIyMjICAgICAgIFwiLFxuICAgIFwiICAgICAgIyMgICBDICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAjIyAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgUCAgICAgICAgIFwiLFxuICAgIFwiI1NTU1NTU1NTU1NTU1MjIyNTU1NTU1NTU1wiXSxcblxuICBbIFwiIFAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiIyMjIyAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgIEMgICBDICAgQyAgIEMgICBDIFwiLFxuICAgIFwiICAgICAgIyMgICAjICAgIyAgICMgICAjWFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgIEMgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICMgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICBDICAgICAgICAgQyAgICAgIFwiLFxuICAgIFwiICAgICAgICAjICAgIEMgICAgIyAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICMgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICBDICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAjICAgICAgICAgICAgIFggIFwiLFxuICAgIFwiICAgICAgICAgICAgIEMgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICMgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICBDICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAjICAgICAgIFwiLFxuICAgIFwiU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1wiXSxcblxuICAgW1wiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiUCAgIFogICBaICAgWiAgIFogICBaICBaQ1wiLFxuICAgIFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiXVxuICBdXG59OyBcblxuLy8gIFtcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiXSAgIiwiXG5leHBvcnQgY2xhc3MgTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKHBvc194LCBwb3NfeSwgY3R4LCBnYW1lV2lkdGgsIGdhbWVIZWlnaHQpe1xuICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IHBvc194LCB5OiBwb3NfeX1cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICB9XG5cbiAgc2V0SW1hZ2UobGVmdEltYWdlLCByaWdodEltYWdlKSB7XG4gICAgdGhpcy5sZWZ0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmxlZnRJbWFnZS5zcmMgPSBsZWZ0SW1hZ2VcbiAgICB0aGlzLnJpZ2h0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnJpZ2h0SW1hZ2Uuc3JjID0gcmlnaHRJbWFnZVxuICAgIHRoaXMubW9uc3RlciA9IHRoaXMubGVmdEltYWdlO1xuICB9XG5cbiAgcmVuZGVyTW9uc3RlcigpIHtcbiAgICB0aGlzLmhhbmRsZUVkZ2VDb2xsaXNpb24oKTtcbiAgICB0aGlzLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZDtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLm1vbnN0ZXIsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlRWRnZUNvbGxpc2lvbigpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICAgIHRoaXMuc3BlZWQgKj0gLTE7XG4gICAgICB0aGlzLm1vbnN0ZXIgPSB0aGlzLnJpZ2h0SW1hZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gdGhpcy5nYW1lV2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICAgIHRoaXMuc3BlZWQgKj0gLTE7XG4gICAgICB0aGlzLm1vbnN0ZXIgPSB0aGlzLmxlZnRJbWFnZTtcbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgU25haWwgZXh0ZW5kcyBNb25zdGVyIHtcbiAgY29uc3RydWN0b3IocG9zX3gsIHBvc195LCBjdHgsIGdhbWVXaWR0aCwgZ2FtZUhlaWdodCl7XG4gICAgc3VwZXIocG9zX3gsIHBvc195LCBjdHgsIGdhbWVXaWR0aCwgZ2FtZUhlaWdodCk7XG4gICAgdGhpcy5zcGVlZCA9IDEuNTtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoIC8gMjU7XG4gICAgdGhpcy5oZWlnaHQgPSBnYW1lSGVpZ2h0IC8gMTg7XG4gICAgbGV0IGxlZnQgPSBcIi4vc3JjL2ltYWdlcy9tb25zdGVycy9sZWZ0LXNuYWlsLnBuZ1wiO1xuICAgIGxldCByaWdodCA9IFwiLi9zcmMvaW1hZ2VzL21vbnN0ZXJzL3JpZ2h0LXNuYWlsLnBuZ1wiO1xuICAgIHRoaXMuc2V0SW1hZ2UobGVmdCwgcmlnaHQpO1xuICAgIHRoaXMucmVuZGVyTW9uc3RlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWlyeSBleHRlbmRzIE1vbnN0ZXIge1xuICBjb25zdHJ1Y3Rvcihwb3NfeCwgcG9zX3ksIGN0eCwgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgc3VwZXIocG9zX3gsIHBvc195LCBjdHgsIGdhbWVXaWR0aCwgZ2FtZUhlaWdodCk7XG4gICAgdGhpcy5zcGVlZCA9IDEuODtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoIC8gMjcuNzc4O1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodCAvIDE4LjQ2MTU7XG4gICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55IC0gKHRoaXMuaGVpZ2h0IC0gZ2FtZUhlaWdodCAvIDE4KTtcbiAgICBsZXQgbGVmdCA9IFwiLi9zcmMvaW1hZ2VzL21vbnN0ZXJzL2xlZnQtZmFpcnkucG5nXCI7XG4gICAgbGV0IHJpZ2h0ID0gXCIuL3NyYy9pbWFnZXMvbW9uc3RlcnMvcmlnaHQtZmFpcnkucG5nXCI7XG4gICAgdGhpcy5zZXRJbWFnZShsZWZ0LCByaWdodCk7XG4gICAgdGhpcy5yZW5kZXJNb25zdGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBpZyBleHRlbmRzIE1vbnN0ZXIge1xuICBjb25zdHJ1Y3Rvcihwb3NfeCwgcG9zX3ksIGN0eCwgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgc3VwZXIocG9zX3gsIHBvc195LCBjdHgsIGdhbWVXaWR0aCwgZ2FtZUhlaWdodCk7XG4gICAgdGhpcy5zcGVlZCA9IDIuNTtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoIC8gNTAgKiAzO1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodCAvIDE0LjQ7XG4gICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55IC0gKHRoaXMuaGVpZ2h0IC0gZ2FtZUhlaWdodCAvIDE4KTtcbiAgICBsZXQgbGVmdCA9IFwiLi9zcmMvaW1hZ2VzL21vbnN0ZXJzL2xlZnQtcGlnLnBuZ1wiO1xuICAgIGxldCByaWdodCA9IFwiLi9zcmMvaW1hZ2VzL21vbnN0ZXJzL3JpZ2h0LXBpZy5wbmdcIjtcbiAgICB0aGlzLnNldEltYWdlKGxlZnQsIHJpZ2h0KTtcbiAgICB0aGlzLnJlbmRlck1vbnN0ZXIoKTtcbiAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpa2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NfeCwgcG9zX3ksIGN0eCwgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0LCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMud2lkdGggPSBnYW1lV2lkdGggLyAyNTtcbiAgICB0aGlzLmhlaWdodCA9IGdhbWVIZWlnaHQgLyA0ODtcbiAgICB0aGlzLnBvc2l0aW9uID0geyB4OiBwb3NfeCwgeTogcG9zX3kgKyB0aGlzLmhlaWdodCAqIDUvMy4wfVxuICAgIHRoaXMucmVuZGVyU3Bpa2UoKTtcbiAgfVxuXG4gIHJlbmRlclNwaWtlKCkge1xuICAgIGNvbnN0IHNwaWtlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBzcGlrZUltYWdlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3RpbGVzL3NwaWtlczEucG5nXCI7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgc3Bpa2VJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgICk7XG4gIH1cblxufSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc194LCBwb3NfeSwgY3R4LCBnYW1lV2lkdGgsIGdhbWVIZWlnaHQsKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoIC8gMjU7XG4gICAgdGhpcy5oZWlnaHQgPSBnYW1lSGVpZ2h0IC8gMTg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogcG9zX3gsIHk6IHBvc195IH1cbiAgICB0aGlzLnJlbmRlclRpbGUoKTtcbiAgfVxuXG4gIHJlbmRlclRpbGUoKSB7XG4gICAgY29uc3QgdGlsZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGlsZUltYWdlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3RpbGVzLzAxLnBuZ1wiO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRpbGVJbWFnZSxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgICk7XG4gIH1cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=