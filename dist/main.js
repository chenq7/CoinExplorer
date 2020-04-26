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

      if (this.currLevel === 1) {
        this.ctx.drawImage(this.tree, 40, -20, 175, 300);
        this.ctx.drawImage(this.tree, 900, 80, 120, 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb2luLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3Bpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiXSwibmFtZXMiOlsiZ2FtZUNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ4Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJoZWlnaHQiLCJ3aWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJDb2luRXhwbG9yZXIiLCJCb2FyZCIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJjdHgiLCJsZXZlbCIsImN1cnJMZXZlbCIsImJvYXJkIiwiY29pbnNBcnIiLCJ0aWxlc0FyciIsInNwaWtlc0FyciIsIm1vbnN0ZXJzIiwidHJlZSIsIkltYWdlIiwic3JjIiwiZ3Jhc3MiLCJpbml0aWFsaXplQm9hcmQiLCJwb3NfeCIsInBvc195IiwidGVtcCIsImkiLCJsZW5ndGgiLCJqIiwidGlsZSIsIlRpbGUiLCJwdXNoIiwiY2hhcmFjdGVyIiwiQ2hhcmFjdGVyIiwiY29pbiIsIkNvaW4iLCJzcGlrZSIsIlNwaWtlIiwibW9uc3RlciIsIlNuYWlsIiwiRmFpcnkiLCJQaWciLCJudW1Db2lucyIsInRpbWUiLCJkcmF3SW1hZ2UiLCJyZW5kZXJUaWxlIiwicmVuZGVyQ29pbiIsInJlbmRlclNwaWtlIiwicmVuZGVyTW9uc3RlciIsInJlc3VsdCIsInVwZGF0ZSIsInJlbmRlckNoYXJhY3RlciIsInN0YXJ0WCIsInN0YXJ0WSIsImNoYXJhY3RlcldpZHRoIiwiY2hhcmFjdGVySGVpZ2h0IiwianVtcGluZyIsInhfdmVsb2NpdHkiLCJ5X3ZlbG9jaXR5IiwicG9zaXRpb24iLCJ5IiwicHJldlBvc2l0aW9uIiwic2V0U291bmQiLCJzZXRJbWFnZSIsImxlZnQiLCJyaWdodCIsInVwIiwiZXZlbnQiLCJrZXlDb2RlIiwiY29pblNvdW5kIiwiQXVkaW8iLCJ2b2x1bWUiLCJqdW1wU291bmQiLCJjaGFyYWN0ZXJJbWFnZSIsImxlZnRJbWFnZSIsInJpZ2h0SW1hZ2UiLCJzb3VuZCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJwbGF5IiwiY29pbnMiLCJzcGlrZXMiLCJ1cGRhdGVDaGFyYWN0ZXIiLCJoYW5kbGVFZGdlQ29sbGlzaW9uIiwidG9wIiwiYm90dG9tIiwidmFsdWUiLCJ0aWxlV2lkdGgiLCJ0aWxlSGVpZ2h0IiwiTWF0aCIsImZsb29yIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImhhbmRsZVRpbGVDb2xsaXNpb24iLCJnZXRSaWdodCIsImdldEJvdHRvbSIsInNldEJvdHRvbSIsImhhbmRsZU1vbnN0ZXJDb2xsaXNpb24iLCJoYW5kbGVTcGlrZUNvbGxpc2lvbiIsImhhbmRsZUNvaW5Db2xsaXNpb24iLCJzZXRQcmV2TGVmdCIsInNldExlZnQiLCJzZXRQcmV2UmlnaHQiLCJzZXRSaWdodCIsInNldFByZXZUb3AiLCJzZXRUb3AiLCJzZXRQcmV2Qm90dG9tIiwic3BsaWNlIiwidGlsZVgiLCJ0aWxlWSIsInRpbGVTaXplIiwiT2JqZWN0IiwidG9wVGlsZUNvbGxpc2lvbiIsImxlZnRUaWxlQ29sbGlzaW9uIiwicmlnaHRUaWxlQ29sbGlzaW9uIiwidG9wVGlsZSIsImdldFByZXZCb3R0b20iLCJsZWZ0VGlsZSIsImdldFByZXZSaWdodCIsInJpZ2h0VGlsZSIsImdldFByZXZMZWZ0IiwiYm90dG9tVGlsZSIsImdldFByZXZUb3AiLCJjb2luSW1hZ2UiLCJnZXRDb250ZXh0IiwiZ2FtZVJ1bm5pbmciLCJjdXJyZW50TGV2ZWwiLCJudW1EZWF0aHMiLCJtdXRlZCIsInJlbmRlckhvbWVTY3JlZW4iLCJhZGRMaXN0ZW5lcnMiLCJtZW51TXVzaWMiLCJsb29wIiwiZ2FtZU11c2ljIiwid2luTXVzaWMiLCJzZWxlY3RTb3VuZCIsInBhdXNlQWxsTXVzaWMiLCJjbGVhclJlY3QiLCJ0aXRsZUZvbnRTaXplIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VUZXh0Iiwib25sb2FkIiwiYmluZCIsInNsaW1lIiwiY2hlY2tFbnRlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuZXdHYW1lIiwiY2hlY2tFc2MiLCJjaGVja1Jlc3RhcnQiLCJmaWxsUmVjdCIsInJldHJ5Rm9udFNpemUiLCJlc2NGb250U2l6ZSIsInNhZFNsaW1lIiwiY29uZ3JhdHNGb250U2l6ZSIsImNoZXN0IiwicHJldlRpbWUiLCJsZXZlbHMiLCJMZXZlbHMiLCJtYXhMZXZlbCIsImdhbWVMb29wIiwidGltZXN0YW1wIiwicmVuZGVyRGVhdGhzIiwicmVuZGVyQ29pbnMiLCJ1cGRhdGVCb2FyZCIsInJlbmRlckdhbWVPdmVyIiwiaXNOYU4iLCJyZW5kZXJXaW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZWF0aHMiLCJNb25zdGVyIiwic3BlZWQiLCJzcGlrZUltYWdlIiwidGlsZUltYWdlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QWxCO0FBQ0E2SixlQUFTLENBQUM1SixHQUFWLEdBQWdCLDJCQUFoQjtBQUNBLFdBQUtWLEdBQUwsQ0FBU2tDLFNBQVQsQ0FDRW9JLFNBREYsRUFFRSxLQUFLckgsUUFBTCxDQUFjNUQsQ0FGaEIsRUFHRSxLQUFLNEQsUUFBTCxDQUFjQyxDQUhoQixFQUlFLEtBQUt4RCxLQUpQLEVBS0UsS0FBS0QsTUFMUDtBQU9EOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCSCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBDb2luRXhwbG9yZXIgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5jb25zdCBnYW1lQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XG5cbmNvbnN0IHggPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEyODBweClcIik7XG5pZiAoeC5tYXRjaGVzKXtcbiAgZ2FtZUNhbnZhcy5oZWlnaHQgPSBcIjYxMlwiO1xuICBnYW1lQ2FudmFzLndpZHRoID0gXCI4NTBcIjtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBuZXcgQ29pbkV4cGxvcmVyKGdhbWVDYW52YXMpO1xufSk7XG5cbiIsImltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vY2hhcmFjdGVyXCI7XG5pbXBvcnQgVGlsZSBmcm9tIFwiLi90aWxlXCI7XG5pbXBvcnQgQ29pbiBmcm9tIFwiLi9jb2luXCI7XG5pbXBvcnQgU3Bpa2UgZnJvbSBcIi4vc3Bpa2VcIjtcbmltcG9ydCB7IFNuYWlsLCBQaWcsIEZhaXJ5IH0gZnJvbSBcIi4vbW9uc3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCwgY3R4LCBsZXZlbCwgY3VyckxldmVsKXtcbiAgICBcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmN1cnJMZXZlbCA9IGN1cnJMZXZlbDtcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICAgIHRoaXMuYm9hcmQgPSBsZXZlbDtcbiAgICB0aGlzLmNvaW5zQXJyID0gW107XG4gICAgdGhpcy50aWxlc0FyciA9IFtdO1xuICAgIHRoaXMuc3Bpa2VzQXJyID0gW107XG4gICAgdGhpcy5tb25zdGVycyA9IFtdO1xuICAgIHRoaXMudHJlZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMudHJlZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iZy9zYWt1cmEucG5nXCI7XG4gICAgdGhpcy5ncmFzcyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZ3Jhc3Muc3JjID0gXCIuL3NyYy9pbWFnZXMvdGlsZXMvZ3Jhc3MucG5nXCI7XG4gICAgdGhpcy5pbml0aWFsaXplQm9hcmQoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVCb2FyZCgpIHtcbiAgICBcbiAgICBsZXQgcG9zX3g7XG4gICAgbGV0IHBvc195O1xuICAgIGxldCB0ZW1wO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICB0ZW1wID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9hcmRbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcG9zX3kgPSBpICogdGhpcy5nYW1lSGVpZ2h0IC8gMTg7XG4gICAgICAgIHBvc194ID0gaiAqIHRoaXMuZ2FtZVdpZHRoIC8gMjU7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdID09PSBcIiNcIil7XG4gICAgICAgICAgbGV0IHRpbGUgPSBuZXcgVGlsZShwb3NfeCwgcG9zX3ksIHRoaXMuY3R4LCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0LCk7XG4gICAgICAgICAgdGVtcC5wdXNoKHRpbGUpO1xuICAgICAgICAgIHRoaXMudGlsZXNBcnIucHVzaCh0aWxlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmJvYXJkW2ldW2pdID09PSBcIlBcIil7XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQsIHBvc194LCBwb3NfeSk7XG4gICAgICAgICAgdGVtcC5wdXNoKHRoaXMuY2hhcmFjdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmJvYXJkW2ldW2pdID09PSBcIkNcIikge1xuICAgICAgICAgIGxldCBjb2luID0gbmV3IENvaW4ocG9zX3gsIHBvc195LCB0aGlzLmN0eCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCwpO1xuICAgICAgICAgIHRlbXAucHVzaChjb2luKTtcbiAgICAgICAgICB0aGlzLmNvaW5zQXJyLnB1c2goY29pbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PT0gXCJTXCIpIHtcbiAgICAgICAgICBsZXQgc3Bpa2UgPSBuZXcgU3Bpa2UocG9zX3gsIHBvc195LCB0aGlzLmN0eCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCwpO1xuICAgICAgICAgIHRlbXAucHVzaChzcGlrZSk7XG4gICAgICAgICAgdGhpcy5zcGlrZXNBcnIucHVzaChzcGlrZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PT0gXCJaXCIpIHtcbiAgICAgICAgICBsZXQgbW9uc3RlciA9IG5ldyBTbmFpbChwb3NfeCwgcG9zX3ksIHRoaXMuY3R4LCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KTtcbiAgICAgICAgICB0ZW1wLnB1c2gobW9uc3Rlcik7XG4gICAgICAgICAgdGhpcy5tb25zdGVycy5wdXNoKG1vbnN0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYm9hcmRbaV1bal0gPT09IFwiWFwiKSB7XG4gICAgICAgICAgbGV0IG1vbnN0ZXIgPSBuZXcgRmFpcnkocG9zX3gsIHBvc195LCB0aGlzLmN0eCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG4gICAgICAgICAgdGVtcC5wdXNoKG1vbnN0ZXIpO1xuICAgICAgICAgIHRoaXMubW9uc3RlcnMucHVzaChtb25zdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmJvYXJkW2ldW2pdID09PSBcIlZcIikge1xuICAgICAgICAgIGxldCBtb25zdGVyID0gbmV3IFBpZyhwb3NfeCwgcG9zX3ksIHRoaXMuY3R4LCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KTtcbiAgICAgICAgICB0ZW1wLnB1c2gobW9uc3Rlcik7XG4gICAgICAgICAgdGhpcy5tb25zdGVycy5wdXNoKG1vbnN0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRlbXAucHVzaChcIiBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYm9hcmRbaV0gPSB0ZW1wO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm51bUNvaW5zID0gdGhpcy5jb2luc0Fyci5sZW5ndGg7XG4gIH1cblxuICB1cGRhdGVCb2FyZCh0aW1lKSB7XG4gICAgaWYgKCF0aW1lKSByZXR1cm47XG5cbiAgICAvLyBSZW5kZXIgYmFja2dyb3VuZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLmN1cnJMZXZlbCA9PT0gMSkge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMudHJlZSwgNDAsIC0yMCwgMTc1LCAzMDApO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMudHJlZSwgOTAwLCA4MCwgMTIwLCAyMDApO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciB0aWxlc1xuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMudGlsZXNBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy50aWxlc0FycltpXS5yZW5kZXJUaWxlKCk7XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIENvaW5zXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb2luc0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmNvaW5zQXJyW2ldLnJlbmRlckNvaW4oKTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgc3Bpa2VzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwaWtlc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zcGlrZXNBcnJbaV0ucmVuZGVyU3Bpa2UoKTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgbW9uc3RlcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9uc3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubW9uc3RlcnNbaV0ucmVuZGVyTW9uc3RlcigpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBzY29yZSBhbmQgY2hhcmFjdGVyIHBvc2l0aW9uXG4gICAgbGV0IG51bUNvaW5zID0gdGhpcy5jb2luc0Fyci5sZW5ndGg7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuY2hhcmFjdGVyLnVwZGF0ZSh0aGlzLmJvYXJkLCB0aGlzLmNvaW5zQXJyLCB0aGlzLnNwaWtlc0FyciwgdGhpcy5tb25zdGVycyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdib29sZWFuJykgcmV0dXJuIHRydWU7XG4gICAgdGhpcy5jb2luc0FyciA9IHJlc3VsdDtcbiAgICBcbiAgICAvLyBSZW5kZXIgY2hhcmFjdGVyXG4gICAgdGhpcy5jaGFyYWN0ZXIucmVuZGVyQ2hhcmFjdGVyKHRoaXMuY3R4KTtcbiAgICBcbiAgICByZXR1cm4gKG51bUNvaW5zIC0gdGhpcy5jb2luc0Fyci5sZW5ndGgpO1xuICB9XG59IiwiaW1wb3J0IFRpbGUgZnJvbSBcIi4vdGlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQsIHN0YXJ0WCwgc3RhcnRZKSB7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLmNoYXJhY3RlcldpZHRoID0gdGhpcy5nYW1lV2lkdGggLyAyNSAtIDAuMDE7XG4gICAgdGhpcy5jaGFyYWN0ZXJIZWlnaHQgPSB0aGlzLmdhbWVIZWlnaHQgLyAxOCAtIDAuMDE7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy54X3ZlbG9jaXR5ID0gMDtcbiAgICB0aGlzLnlfdmVsb2NpdHkgPSAwO1xuICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IHN0YXJ0WCwgeTogc3RhcnRZIH1cbiAgICB0aGlzLnByZXZQb3NpdGlvbiA9IHsgeDogc3RhcnRYLCB5OiBzdGFydFkgfVxuICAgIHRoaXMuc2V0U291bmQoKTtcbiAgICB0aGlzLnNldEltYWdlKCk7XG5cbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy51cCA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICB0aGlzLnVwID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGdldExlZnQoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnggfVxuICBnZXRSaWdodCgpIHsgcmV0dXJuIHRoaXMucG9zaXRpb24ueCArIHRoaXMuY2hhcmFjdGVyV2lkdGggfVxuICBnZXRUb3AoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnkgfVxuICBnZXRCb3R0b20oKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmNoYXJhY3RlckhlaWdodCB9XG5cbiAgZ2V0UHJldkxlZnQoKSB7IHJldHVybiB0aGlzLnByZXZQb3NpdGlvbi54IH1cbiAgZ2V0UHJldlJpZ2h0KCkgeyByZXR1cm4gdGhpcy5wcmV2UG9zaXRpb24ueCArIHRoaXMuY2hhcmFjdGVyV2lkdGggfVxuICBnZXRQcmV2VG9wKCkgeyByZXR1cm4gdGhpcy5wcmV2UG9zaXRpb24ueSB9XG4gIGdldFByZXZCb3R0b20oKSB7IHJldHVybiB0aGlzLnByZXZQb3NpdGlvbi55ICsgdGhpcy5jaGFyYWN0ZXJIZWlnaHQgfVxuXG4gIHNldExlZnQoeCkgeyB0aGlzLnBvc2l0aW9uLnggPSB4fVxuICBzZXRSaWdodCh4KSB7IHRoaXMucG9zaXRpb24ueCA9IHggLSB0aGlzLmNoYXJhY3RlcldpZHRoIH1cbiAgc2V0VG9wKHkpIHsgdGhpcy5wb3NpdGlvbi55ID0geSB9XG4gIHNldEJvdHRvbSh5KSB7IHRoaXMucG9zaXRpb24ueSA9IHkgLSB0aGlzLmNoYXJhY3RlckhlaWdodCB9XG5cbiAgc2V0UHJldkxlZnQoeCkgeyB0aGlzLnByZXZQb3NpdGlvbi54ID0geCB9XG4gIHNldFByZXZSaWdodCh4KSB7IHRoaXMucHJldlBvc2l0aW9uLnggPSB4IC0gdGhpcy5jaGFyYWN0ZXJXaWR0aCB9XG4gIHNldFByZXZUb3AoeSkgeyB0aGlzLnByZXZQb3NpdGlvbi55ID0geSB9XG4gIHNldFByZXZCb3R0b20oeSkgeyB0aGlzLnByZXZQb3NpdGlvbi55ID0geSAtIHRoaXMuY2hhcmFjdGVySGVpZ2h0IH1cblxuICBzZXRTb3VuZCgpIHtcbiAgICB0aGlzLmNvaW5Tb3VuZCA9IG5ldyBBdWRpbyhcIi4vc3JjL2F1ZGlvL3NvdW5kL2NvaW4tc291bmQubXAzXCIpO1xuICAgIHRoaXMuY29pblNvdW5kLnZvbHVtZSA9IDAuMztcbiAgICB0aGlzLmp1bXBTb3VuZCA9IG5ldyBBdWRpbyhcIi4vc3JjL2F1ZGlvL3NvdW5kL2p1bXAubXAzXCIpO1xuICAgIHRoaXMuanVtcFNvdW5kLnZvbHVtZSA9IDAuNztcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIHRoaXMuY2hhcmFjdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNoYXJhY3RlckltYWdlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3NsaW1lL3NsaW1lLnBuZ1wiO1xuICAgIHRoaXMubGVmdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5sZWZ0SW1hZ2Uuc3JjID0gXCIuL3NyYy9pbWFnZXMvc2xpbWUvbGVmdC1zbGltZS5wbmdcIjtcbiAgICB0aGlzLnJpZ2h0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnJpZ2h0SW1hZ2Uuc3JjID0gXCIuL3NyYy9pbWFnZXMvc2xpbWUvcmlnaHQtc2xpbWUucG5nXCI7XG4gIH1cblxuICBwbGF5KHNvdW5kKSB7XG4gICAgc291bmQucGF1c2UoKTtcbiAgICBzb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgc291bmQucGxheSgpO1xuICB9XG5cbiAgcmVuZGVyQ2hhcmFjdGVyKGN0eCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmNoYXJhY3RlckltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5jaGFyYWN0ZXJXaWR0aCxcbiAgICAgIHRoaXMuY2hhcmFjdGVySGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJhY3RlcigpIHtcbiAgICBcbiAgICBpZiAodGhpcy51cCAmJiB0aGlzLmp1bXBpbmcgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucGxheSh0aGlzLmp1bXBTb3VuZCk7XG4gICAgICB0aGlzLnlfdmVsb2NpdHkgLT0gdGhpcy5nYW1lSGVpZ2h0IC8gMjA7XG4gICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZWZ0KSB7XG4gICAgICB0aGlzLmNoYXJhY3RlckltYWdlID0gdGhpcy5sZWZ0SW1hZ2U7XG4gICAgICB0aGlzLnhfdmVsb2NpdHkgLT0gMC45O1xuICAgIH1cbiAgICBpZiAodGhpcy5yaWdodCkge1xuICAgICAgdGhpcy5jaGFyYWN0ZXJJbWFnZSA9IHRoaXMucmlnaHRJbWFnZTtcbiAgICAgIHRoaXMueF92ZWxvY2l0eSArPSAwLjk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMueV92ZWxvY2l0eSArPSAxLjM7XG5cbiAgICB0aGlzLnByZXZQb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54O1xuICAgIHRoaXMucHJldlBvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy54X3ZlbG9jaXR5O1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnlfdmVsb2NpdHk7XG4gICAgdGhpcy54X3ZlbG9jaXR5ICo9IDAuODU7XG4gICAgdGhpcy55X3ZlbG9jaXR5ICo9IDAuODU7XG4gIH1cblxuICB1cGRhdGUoYm9hcmQsIGNvaW5zLCBzcGlrZXMsIG1vbnN0ZXJzKSB7XG5cbiAgICB0aGlzLnVwZGF0ZUNoYXJhY3RlcigpO1xuXG4gICAgdGhpcy5oYW5kbGVFZGdlQ29sbGlzaW9uKCk7XG5cbiAgICAvLyBoYW5kbGUgdGlsZSBjb2xsaXNpb24gXG4gICAgbGV0IGxlZnQ7XG4gICAgbGV0IHJpZ2h0O1xuICAgIGxldCB0b3A7XG4gICAgbGV0IGJvdHRvbTtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBsZXQgdGlsZVdpZHRoID0gdGhpcy5nYW1lV2lkdGggLyAyNTtcbiAgICBsZXQgdGlsZUhlaWdodCA9IHRoaXMuZ2FtZUhlaWdodCAvIDE4O1xuXG4gICAgdG9wID0gTWF0aC5mbG9vcih0aGlzLmdldFRvcCgpIC8gdGlsZUhlaWdodCk7XG4gICAgbGVmdCA9IE1hdGguZmxvb3IodGhpcy5nZXRMZWZ0KCkgLyB0aWxlV2lkdGgpO1xuICAgIHZhbHVlID0gYm9hcmRbdG9wXVtsZWZ0XTtcbiAgICB0aGlzLmhhbmRsZVRpbGVDb2xsaXNpb24odmFsdWUsIGxlZnQgKiB0aWxlV2lkdGgsIHRvcCAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCk7XG5cbiAgICB0b3AgPSBNYXRoLmZsb29yKHRoaXMuZ2V0VG9wKCkgLyB0aWxlSGVpZ2h0KTtcbiAgICByaWdodCA9IE1hdGguZmxvb3IodGhpcy5nZXRSaWdodCgpIC8gdGlsZVdpZHRoKTtcbiAgICB2YWx1ZSA9IGJvYXJkW3RvcF1bcmlnaHRdO1xuICAgIHRoaXMuaGFuZGxlVGlsZUNvbGxpc2lvbih2YWx1ZSwgcmlnaHQgKiB0aWxlV2lkdGgsIHRvcCAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCk7XG5cbiAgICBib3R0b20gPSBNYXRoLmZsb29yKHRoaXMuZ2V0Qm90dG9tKCkgLyB0aWxlSGVpZ2h0KTtcbiAgICBib3R0b20gPSAoYm90dG9tID4gMTcgPyAxNyA6IGJvdHRvbSk7XG4gICAgbGVmdCA9IE1hdGguZmxvb3IodGhpcy5nZXRMZWZ0KCkgLyB0aWxlV2lkdGgpO1xuICAgIHZhbHVlID0gYm9hcmRbYm90dG9tXVtsZWZ0XTtcbiAgICB0aGlzLmhhbmRsZVRpbGVDb2xsaXNpb24odmFsdWUsIGxlZnQgKiB0aWxlV2lkdGgsIGJvdHRvbSAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCk7XG5cbiAgICBib3R0b20gPSBNYXRoLmZsb29yKHRoaXMuZ2V0Qm90dG9tKCkgLyB0aWxlSGVpZ2h0KTtcbiAgICBib3R0b20gPSAoYm90dG9tID4gMTcgPyAxNyA6IGJvdHRvbSk7XG4gICAgcmlnaHQgPSBNYXRoLmZsb29yKHRoaXMuZ2V0UmlnaHQoKSAvIHRpbGVXaWR0aCk7XG4gICAgdmFsdWUgPSBib2FyZFtib3R0b21dW3JpZ2h0XTtcbiAgICB0aGlzLmhhbmRsZVRpbGVDb2xsaXNpb24odmFsdWUsIHJpZ2h0ICogdGlsZVdpZHRoLCBib3R0b20gKiB0aWxlSGVpZ2h0LCB0aWxlV2lkdGgpO1xuXG4gICAgaWYgKHRoaXMuZ2V0Qm90dG9tKCkgPiB0aGlzLmdhbWVIZWlnaHQpIHRoaXMuc2V0Qm90dG9tKHRoaXMuZ2FtZUhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5oYW5kbGVNb25zdGVyQ29sbGlzaW9uKG1vbnN0ZXJzKSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHRoaXMuaGFuZGxlU3Bpa2VDb2xsaXNpb24oc3Bpa2VzKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29pbkNvbGxpc2lvbihjb2lucyk7ICAgXG4gIH1cblxuICBoYW5kbGVFZGdlQ29sbGlzaW9uKCkge1xuICAgIGlmICh0aGlzLmdldExlZnQoKSA8IDApIHtcbiAgICAgIHRoaXMuc2V0UHJldkxlZnQodGhpcy5nZXRMZWZ0KCkpO1xuICAgICAgdGhpcy5zZXRMZWZ0KDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRSaWdodCgpID4gdGhpcy5nYW1lV2lkdGgpe1xuICAgICAgdGhpcy5zZXRQcmV2UmlnaHQodGhpcy5nZXRSaWdodCgpKTtcbiAgICAgIHRoaXMuc2V0UmlnaHQodGhpcy5nYW1lV2lkdGgpO1xuICAgIH0gXG4gICAgaWYgKHRoaXMuZ2V0VG9wKCkgPCAwKXtcbiAgICAgIHRoaXMuc2V0UHJldlRvcCh0aGlzLmdldFRvcCgpKTtcbiAgICAgIHRoaXMuc2V0VG9wKDApO1xuICAgIH0gXG4gICAgaWYgKHRoaXMuZ2V0Qm90dG9tKCkgPiB0aGlzLmdhbWVIZWlnaHQpe1xuICAgICAgdGhpcy5zZXRQcmV2Qm90dG9tKHRoaXMuZ2V0Qm90dG9tKCkpO1xuICAgICAgdGhpcy5zZXRCb3R0b20odGhpcy5nYW1lSGVpZ2h0KTtcbiAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIH0gXG4gIH1cblxuICBoYW5kbGVDb2luQ29sbGlzaW9uKGNvaW5zKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmdldExlZnQoKSA8IGNvaW5zW2ldLnBvc2l0aW9uLnggKyBjb2luc1tpXS53aWR0aCAmJlxuICAgICAgICB0aGlzLmdldExlZnQoKSArIGNvaW5zW2ldLndpZHRoID4gY29pbnNbaV0ucG9zaXRpb24ueCAmJlxuICAgICAgICB0aGlzLmdldFRvcCgpIDwgY29pbnNbaV0ucG9zaXRpb24ueSArIGNvaW5zW2ldLmhlaWdodCAmJlxuICAgICAgICB0aGlzLmdldEJvdHRvbSgpID4gY29pbnNbaV0ucG9zaXRpb24ueSkge1xuICAgICAgICB0aGlzLnBsYXkodGhpcy5jb2luU291bmQpO1xuICAgICAgICBjb2lucy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2lucztcbiAgfVxuXG4gIGhhbmRsZVNwaWtlQ29sbGlzaW9uKHNwaWtlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bpa2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZ2V0TGVmdCgpIDwgc3Bpa2VzW2ldLnBvc2l0aW9uLnggKyBzcGlrZXNbaV0ud2lkdGggJiZcbiAgICAgICAgdGhpcy5nZXRMZWZ0KCkgKyBzcGlrZXNbaV0ud2lkdGggPiBzcGlrZXNbaV0ucG9zaXRpb24ueCAmJlxuICAgICAgICB0aGlzLmdldFRvcCgpIDwgc3Bpa2VzW2ldLnBvc2l0aW9uLnkgKyBzcGlrZXNbaV0uaGVpZ2h0ICYmXG4gICAgICAgIHRoaXMuZ2V0Qm90dG9tKCkgPiBzcGlrZXNbaV0ucG9zaXRpb24ueSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlTW9uc3RlckNvbGxpc2lvbihtb25zdGVycykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9uc3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nZXRMZWZ0KCkgPCBtb25zdGVyc1tpXS5wb3NpdGlvbi54ICsgbW9uc3RlcnNbaV0ud2lkdGggJiZcbiAgICAgICAgdGhpcy5nZXRSaWdodCgpID4gbW9uc3RlcnNbaV0ucG9zaXRpb24ueCAmJlxuICAgICAgICB0aGlzLmdldFRvcCgpIDwgbW9uc3RlcnNbaV0ucG9zaXRpb24ueSArIG1vbnN0ZXJzW2ldLmhlaWdodCAmJlxuICAgICAgICB0aGlzLmdldEJvdHRvbSgpID4gbW9uc3RlcnNbaV0ucG9zaXRpb24ueSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlVGlsZUNvbGxpc2lvbih2YWx1ZSwgdGlsZVgsIHRpbGVZLCB0aWxlU2l6ZSl7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbHVlIGluc3RhbmNlb2YgVGlsZSl7XG4gICAgICBpZiAodGhpcy50b3BUaWxlQ29sbGlzaW9uKHRpbGVZKSkgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMubGVmdFRpbGVDb2xsaXNpb24odGlsZVgpKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5yaWdodFRpbGVDb2xsaXNpb24odGlsZVggKyB0aWxlU2l6ZSkpIHJldHVybjtcbiAgICB9XG4gIH1cblxuICB0b3BUaWxlQ29sbGlzaW9uKHRvcFRpbGUpIHtcbiAgICBpZiAodGhpcy5nZXRCb3R0b20oKSA+IHRvcFRpbGUgJiYgdGhpcy5nZXRQcmV2Qm90dG9tKCkgPD0gdG9wVGlsZSkge1xuICAgICAgdGhpcy5zZXRQcmV2Qm90dG9tKHRoaXMuZ2V0Qm90dG9tKCkpO1xuICAgICAgdGhpcy5zZXRCb3R0b20odG9wVGlsZSAtIDAuMDEpO1xuICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGVmdFRpbGVDb2xsaXNpb24obGVmdFRpbGUpe1xuICAgIGlmICh0aGlzLmdldFJpZ2h0KCkgPiBsZWZ0VGlsZSAmJiB0aGlzLmdldFByZXZSaWdodCgpIDw9IGxlZnRUaWxlKXtcbiAgICAgIHRoaXMuc2V0UHJldlJpZ2h0KHRoaXMuZ2V0UmlnaHQoKSk7XG4gICAgICB0aGlzLnNldFJpZ2h0KGxlZnRUaWxlIC0gMC4wMSk7XG4gICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJpZ2h0VGlsZUNvbGxpc2lvbihyaWdodFRpbGUpe1xuICAgIGlmICh0aGlzLmdldExlZnQoKSA8IHJpZ2h0VGlsZSAmJiB0aGlzLmdldFByZXZMZWZ0KCkgPj0gcmlnaHRUaWxlKXtcbiAgICAgIHRoaXMuc2V0UHJldkxlZnQodGhpcy5nZXRMZWZ0KCkpO1xuICAgICAgdGhpcy5zZXRMZWZ0KHJpZ2h0VGlsZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYm90dG9tVGlsZUNvbGxpc2lvbihib3R0b21UaWxlKSB7XG4gICAgaWYgKHRoaXMuZ2V0VG9wKCkgPCBib3R0b21UaWxlICYmIHRoaXMuZ2V0UHJldlRvcCgpID49IGJvdHRvbVRpbGUpIHtcbiAgICAgIHRoaXMuc2V0UHJldlRvcCh0aGlzLmdldFRvcCgpKTtcbiAgICAgIHRoaXMuc2V0VG9wKGJvdHRvbVRpbGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29pbiB7XG4gIGNvbnN0cnVjdG9yKHBvc194LCBwb3NfeSwgY3R4LCBnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoIC8gMjU7XG4gICAgdGhpcy5oZWlnaHQgPSBnYW1lSGVpZ2h0IC8gMTg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogcG9zX3gsIHk6IHBvc195IH1cbiAgICB0aGlzLnJlbmRlckNvaW4oKTtcbiAgfVxuXG4gIHJlbmRlckNvaW4oKSB7XG4gICAgY29uc3QgY29pbkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY29pbkltYWdlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2l0ZW1zL2NvaW4tZ29sZC5wbmdcIjtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICBjb2luSW1hZ2UsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApO1xuICB9XG5cbn0iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCBMZXZlbHMgZnJvbSBcIi4vbGV2ZWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW5FeHBsb3JlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVDYW52YXMpe1xuICAgIHRoaXMuY3R4ID0gZ2FtZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lQ2FudmFzLndpZHRoO1xuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVDYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMuZ2FtZVJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgdGhpcy5udW1EZWF0aHMgPSAwO1xuICAgIHRoaXMubXV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNldFNvdW5kKCk7XG4gICAgdGhpcy5yZW5kZXJIb21lU2NyZWVuKCk7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHNldFNvdW5kKCkge1xuICAgIHRoaXMubWVudU11c2ljID0gbmV3IEF1ZGlvKFwiLi9zcmMvYXVkaW8vbXVzaWMvbWFpbi1tZW51Lm1wM1wiKTtcbiAgICB0aGlzLm1lbnVNdXNpYy52b2x1bWUgPSAwLjI7XG4gICAgdGhpcy5tZW51TXVzaWMubG9vcCA9IHRydWU7XG4gICAgdGhpcy5nYW1lTXVzaWMgPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9tdXNpYy9iYWNrZ3JvdW5kLm1wM1wiKTtcbiAgICB0aGlzLmdhbWVNdXNpYy52b2x1bWUgPSAwLjQ7XG4gICAgdGhpcy5nYW1lTXVzaWMubG9vcCA9IHRydWU7XG4gICAgdGhpcy53aW5NdXNpYyA9IG5ldyBBdWRpbyhcIi4vc3JjL2F1ZGlvL211c2ljL3ZpY3RvcnkubXAzXCIpO1xuICAgIHRoaXMud2luTXVzaWMubG9vcCA9IHRydWU7XG4gICAgdGhpcy53aW5NdXNpYy52b2x1bWUgPSAwLjE1O1xuICAgIHRoaXMuc2VsZWN0U291bmQgPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9zb3VuZC9zZWxlY3Qud2F2XCIpO1xuICB9XG5cbiAgcGxheShzb3VuZCkge1xuICAgIGlmICh0aGlzLm11dGVkKSByZXR1cm47XG4gICAgc291bmQucGF1c2UoKTtcbiAgICBzb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgc291bmQucGxheSgpO1xuICB9XG5cbiAgcGF1c2VBbGxNdXNpYygpe1xuICAgIHRoaXMubWVudU11c2ljLnBhdXNlKCk7XG4gICAgdGhpcy5nYW1lTXVzaWMucGF1c2UoKTtcbiAgICB0aGlzLndpbk11c2ljLnBhdXNlKCk7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy5nYW1lUnVubmluZyAmJiAhdGhpcy5tdXRlZCkge1xuICAgICAgICB0aGlzLm1lbnVNdXNpYy5wbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIC8vIG0ga2V5XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNzcpe1xuICAgICAgICBpZiAodGhpcy5tdXRlZCl7XG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZVJ1bm5pbmcpe1xuICAgICAgICAgICAgdGhpcy5nYW1lTXVzaWMucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVudU11c2ljLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tdXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucGF1c2VBbGxNdXNpYygpO1xuICAgICAgICAgIHRoaXMubXV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIHJlbmRlckhvbWVTY3JlZW4oKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpO1xuXG4gICAgY29uc3QgdGl0bGVGb250U2l6ZSA9IHRoaXMuZ2FtZVdpZHRoID4gOTAwID8gODAgOiA2NTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSBgYm9sZCAke3RpdGxlRm9udFNpemV9cHggQXJpYWxgO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJDT0lOIEVYUExPUkVSXCIsIDAuMTcgKiB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0LzIuNCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsdWVcIjtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoXCJDT0lOIEVYUExPUkVSXCIsIDAuMTcgKiB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0IC8gMi40KTtcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiXG4gICAgdGhpcy5jdHguZm9udCA9IFwiYm9sZCAzMHB4IEFyaWFsXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBFbnRlciB0byBCZWdpbiFcIiwgdGhpcy5nYW1lV2lkdGggLyAyLjg1NywgdGhpcy5nYW1lSGVpZ2h0IC8gMS40NCk7XG5cbiAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDIwcHggQXJpYWxcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIGVzYyB0byBnbyBiYWNrIHRvIGhvbWUgc2NyZWVuXCIsIHRoaXMuZ2FtZVdpZHRoIC8gMi45NDEsIHRoaXMuZ2FtZUhlaWdodCAvIDEuMjg1Nyk7XG5cbiAgICBjb25zdCBjb2luID0gbmV3IEltYWdlKCk7XG4gICAgY29pbi5zcmMgPSBcIi4vc3JjL2ltYWdlcy9pdGVtcy9jb2luLWdvbGQucG5nXCI7XG4gICAgY29pbi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY29pbiwgdGhpcy5nYW1lV2lkdGggKiAwLjI4LCB0aGlzLmdhbWVIZWlnaHQgLyAxLjUzMiwgNDAsIDQwKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICBjb25zdCBzbGltZSA9IG5ldyBJbWFnZSgpO1xuICAgIHNsaW1lLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3NsaW1lL3NsaW1lLnBuZ1wiO1xuICAgIHNsaW1lLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNsaW1lLCB0aGlzLmdhbWVXaWR0aCAqIDAuMjgsIHRoaXMuZ2FtZUhlaWdodCAvIDEuMzU4NSwgNDAsIDQwKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNoZWNrRW50ZXIgPSB0aGlzLmNoZWNrRW50ZXIuYmluZCh0aGlzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jaGVja0VudGVyKTtcbiAgfVxuXG4gIGNoZWNrRW50ZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIFxuICAgICAgdGhpcy5wbGF5KHRoaXMuc2VsZWN0U291bmQpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY2hlY2tFbnRlcik7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgICB0aGlzLm5ld0dhbWUoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0VzYyhldmVudCl7XG4gICAgLy8gZXNjIGtleVxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY2hlY2tFc2MpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY2hlY2tSZXN0YXJ0KTtcbiAgICAgIHRoaXMuZ2FtZVJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucGF1c2VBbGxNdXNpYygpO1xuICAgICAgdGhpcy5wbGF5KHRoaXMuc2VsZWN0U291bmQpO1xuICAgICAgdGhpcy5wbGF5KHRoaXMubWVudU11c2ljKTtcbiAgICAgIHRoaXMucmVuZGVySG9tZVNjcmVlbigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckdhbWVPdmVyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KTtcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KTtcblxuICAgIGNvbnN0IHRpdGxlRm9udFNpemUgPSB0aGlzLmdhbWVXaWR0aCA+IDkwMCA/IDgwIDogNjU7XG4gICAgY29uc3QgcmV0cnlGb250U2l6ZSA9IHRoaXMuZ2FtZVdpZHRoID4gOTAwID8gMzAgOiAyNTtcbiAgICBjb25zdCBlc2NGb250U2l6ZSA9IHRoaXMuZ2FtZVdpZHRoID4gOTAwPyAyMCA6IDE1O1xuXG4gICAgdGhpcy5jdHguZm9udCA9IGBib2xkICR7dGl0bGVGb250U2l6ZX1weCBBcmlhbGA7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuZ2FtZVdpZHRoICogMC4yNSwgdGhpcy5nYW1lSGVpZ2h0IC8gMi40KTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSBgYm9sZCAke3JldHJ5Rm9udFNpemV9cHggQXJpYWxgO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgciBrZXkgdG8gcmV0cnkgbGV2ZWxcIiwgdGhpcy5nYW1lV2lkdGggKiAwLjMyNSwgdGhpcy5nYW1lSGVpZ2h0IC8gMS40NCk7XG5cbiAgICB0aGlzLmN0eC5mb250ID0gYGJvbGQgJHtlc2NGb250U2l6ZX1weCBBcmlhbGA7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBlc2MgdG8gZ28gYmFjayB0byBob21lIHNjcmVlblwiLCB0aGlzLmdhbWVXaWR0aCAqIDAuMzI1LCB0aGlzLmdhbWVIZWlnaHQgLyAxLjI4NTcpO1xuXG4gICAgY29uc3Qgc2FkU2xpbWUgPSBuZXcgSW1hZ2UoKTtcbiAgICBzYWRTbGltZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc2FkU2xpbWUsIHRoaXMuZ2FtZVdpZHRoICogMC43MywgdGhpcy5nYW1lSGVpZ2h0IC8gMS40NCwgdGhpcy5nYW1lV2lkdGggKiAwLjI5OCwgdGhpcy5nYW1lSGVpZ2h0IC8gMy42KTtcbiAgICB9LmJpbmQodGhpcyk7XG4gICAgc2FkU2xpbWUuc3JjID0gXCIuL3NyYy9pbWFnZXMvc2xpbWUvc2FkLXNsaW1lLnBuZ1wiO1xuXG4gICAgdGhpcy5jaGVja1Jlc3RhcnQgPSB0aGlzLmNoZWNrUmVzdGFydC5iaW5kKHRoaXMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNoZWNrUmVzdGFydCk7XG4gIH1cblxuICBjaGVja1Jlc3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gODIpIHtcbiAgICAgIHRoaXMucGxheSh0aGlzLnNlbGVjdFNvdW5kKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNoZWNrUmVzdGFydCk7XG4gICAgICB0aGlzLmdhbWVSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMubmV3R2FtZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcldpbigpIHtcbiAgICB0aGlzLmdhbWVNdXNpYy5wYXVzZSgpO1xuICAgIHRoaXMucGxheSh0aGlzLndpbk11c2ljKTtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG5cbiAgICBjb25zdCB0aXRsZUZvbnRTaXplID0gdGhpcy5nYW1lV2lkdGggPiA5MDAgPyA4MCA6IDY1O1xuICAgIGNvbnN0IGNvbmdyYXRzRm9udFNpemUgPSB0aGlzLmdhbWVXaWR0aCA+IDkwMCA/IDMwIDogMjU7XG4gICAgY29uc3QgZXNjRm9udFNpemUgPSB0aGlzLmdhbWVXaWR0aCA+IDkwMCA/IDIwIDogMTU7XG5cbiAgICB0aGlzLmN0eC5mb250ID0gYGJvbGQgJHt0aXRsZUZvbnRTaXplfXB4IEFyaWFsYDtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJZT1UgV0lOIVwiLCB0aGlzLmdhbWVXaWR0aCAqIDAuMzA1LCB0aGlzLmdhbWVIZWlnaHQgLyAzLjYpO1xuXG4gICAgdGhpcy5jdHguZm9udCA9IGBib2xkICR7Y29uZ3JhdHNGb250U2l6ZX1weCBBcmlhbGA7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJDb25ncmF0cyBvbiBiZWF0aW5nIHRoZSBnYW1lIVwiLCB0aGlzLmdhbWVXaWR0aCAqIDAuMjgsIHRoaXMuZ2FtZUhlaWdodCAvIDEuNSk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsdWVcIlxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBZb3UgZGllZCBhIHRvdGFsIG9mICR7dGhpcy5udW1EZWF0aHN9IHRpbWVzYCwgdGhpcy5nYW1lV2lkdGggKiAwLjMyMiwgdGhpcy5nYW1lSGVpZ2h0IC8gMS4yODU3KTtcbiAgICBcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5mb250ID0gYGJvbGQgJHtlc2NGb250U2l6ZX1weCBBcmlhbGA7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBlc2MgdG8gZ28gYmFjayB0byBob21lIHNjcmVlblwiLCB0aGlzLmdhbWVXaWR0aCAqIDAuMzI1LCB0aGlzLmdhbWVIZWlnaHQgLyAxLjEyNSk7XG5cbiAgICBjb25zdCBjaGVzdCA9IG5ldyBJbWFnZSgpO1xuICAgIGNoZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjaGVzdCwgdGhpcy5nYW1lV2lkdGggKiAwLjQzLCB0aGlzLmdhbWVIZWlnaHQgLyAyLjg4LCB0aGlzLmdhbWVXaWR0aCAqIDAuMTM5LCB0aGlzLmdhbWVIZWlnaHQgLyA0LjgzMik7XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIGNoZXN0LnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2l0ZW1zL2NoZXN0LWdvbGQtY2xvc2UucG5nXCI7XG4gIH1cblxuICBuZXdHYW1lKCl7XG4gICAgaWYgKCF0aGlzLmdhbWVSdW5uaW5nKXtcbiAgICAgIHRoaXMubWVudU11c2ljLnBhdXNlKClcbiAgICAgIHRoaXMucGxheSh0aGlzLmdhbWVNdXNpYyk7XG4gICAgICB0aGlzLm51bURlYXRocyA9IDA7XG4gICAgfVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNoZWNrRXNjKTtcbiAgICB0aGlzLmNoZWNrRXNjID0gdGhpcy5jaGVja0VzYy5iaW5kKHRoaXMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNoZWNrRXNjKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICB0aGlzLmdhbWVSdW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmNvaW5zID0gMDtcbiAgICB0aGlzLnRpbWUgPSA2MDtcbiAgICB0aGlzLnByZXZUaW1lID0gMDtcbiAgICB0aGlzLmxldmVscyA9IExldmVscygpO1xuICAgIHRoaXMubWF4TGV2ZWwgPSB0aGlzLmxldmVscy5sZW5ndGggLSAxO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCwgdGhpcy5jdHgsIHRoaXMubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXSwgdGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nYW1lTG9vcCgpO1xuICB9XG5cbiAgZ2FtZUxvb3AodGltZXN0YW1wKSB7XG4gICAgaWYgKCF0aGlzLmdhbWVSdW5uaW5nKSByZXR1cm47XG4gIFxuICAgIGxldCB0aW1lID0gdGltZXN0YW1wIC0gdGhpcy5wcmV2VGltZTtcbiAgICB0aGlzLnByZXZUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpO1xuXG4gICAgdGhpcy5yZW5kZXJEZWF0aHModGhpcy5udW1EZWF0aHMpO1xuICAgIHRoaXMucmVuZGVyQ29pbnModGhpcy5jb2lucyk7XG5cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5ib2FyZC51cGRhdGVCb2FyZCh0aW1lKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ2Jvb2xlYW4nKXtcbiAgICAgIHRoaXMubnVtRGVhdGhzICs9IDE7XG4gICAgICB0aGlzLnJlbmRlckdhbWVPdmVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb2lucyArPSAoaXNOYU4ocmVzdWx0KSA/IDAgOiByZXN1bHQpO1xuICAgIGlmICh0aGlzLmNvaW5zID49IHRoaXMuYm9hcmQubnVtQ29pbnMpe1xuICAgICAgXG4gICAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLm1heExldmVsKXtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgKz0gMTtcbiAgICAgICAgdGhpcy5uZXdHYW1lKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJXaW4oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApO1xuICB9XG5cbiAgcmVuZGVyRGVhdGhzKGRlYXRocykge1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIkRlYXRoczpcIiwgMTAsIDMwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChkZWF0aHMsIDkwLCAzMCk7XG4gIH1cblxuICByZW5kZXJDb2lucyhjb2lucyl7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiQ29pbnM6XCIsIHRoaXMuZ2FtZVdpZHRoIC0gMTEwLCAzMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoY29pbnMsIHRoaXMuZ2FtZVdpZHRoIC0gNDAsIDMwKTtcbiAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gW1tdLFxuXG4gICBbXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgQyBDIEMgQyBDIEMgICAgICAgXCIsXG4gICAgXCIgICAgICAgIyMjIyMjIyMjIyMjICAgICAgXCIsXG4gICAgXCIgICAgICMgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAjICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgIyAgICAgICAgICAgICAgICAgICAgWCAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIjIyMjIyMjIyMjIyMjIyMjIyMjICAgICMjXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICMjICAgXCIsXG4gICAgXCJDICAgICBDIEMgQyBDIEMgQyBDICAgICAgXCIsXG4gICAgXCIjICAgICAjIyMjIyMjIyMjIyMjICAgICAgXCIsXG4gICAgXCIjI0MgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIjIyMjUyAgICAgICAgICAgICAgIFNTU1NTXCIsXG4gICAgXCIjIyMjIyMgQyAgICAgICAgICAgICMjIyMjXCIsXG4gICAgXCIgICAgICAgIyAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAjICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICBQICAgICAgICBWXCIsXG4gICAgXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCJdLFxuXG4gICAgXG4gICBbXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgQyAgIEMgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAjIyAgICMgICBYXCIsXG4gICAgXCIgICAgICAgICAgICAgQyAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAjIyAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgQyAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAjIyAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgQyAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAjIyAgICBTU1NTU1NTU1NTU1NTXCIsXG4gICAgXCIgICBDICAgICAgICAjIyMjIyMjIyMjIyMjXCIsXG4gICAgXCIgICAjIyAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgQyAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgIyMgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgIEMgICAgICAgICAgICBYXCIsXG4gICAgXCIgICAgICAgICAgICMjICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICBQICAgICAgICAgXCIsXG4gICAgXCIjU1NTU1NTU1NTU1NTUyMjI1NTU1NTU1NTXCJdLFxuXG4gICBbXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICBYXCIsXG4gICAgXCJDQ0NDICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIjIyMjICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAjIyAgIEMgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICMjICBDICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICBDICAgICAjIyAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICMjICAgICAgICBDICAgICBDXCIsXG4gICAgXCIgICAgICBDICAgICAgICAgICAjIyAgICAgXCIsXG4gICAgXCIgICAgICMjICAgICAgICAgICAgICAgICBTXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgIyMjXCIsXG4gICAgXCIgIFNDICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICMjICAgICAgICAgICAgQ1MgIyMgICAgXCIsXG4gICAgXCIgICAgICBDUyAgICAgICAjIyMgICAgICAgXCIsXG4gICAgXCIgICAgICAjIyAgIEMgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICMjICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICBQICAgICAgICAgXCIsXG4gICAgXCIjU1NTU1NTU1NTU1NTUyMjI1NTU1NTU1NTXCJdLFxuXG4gIFsgXCIgUCAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIjIyMjICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgQyAgIEMgICBDICAgQyAgIEMgXCIsXG4gICAgXCIgICAgICAjIyAgICMgICAjICAgIyAgICNYXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgQyAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgIyAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgIEMgICAgICAgICBDICAgICAgXCIsXG4gICAgXCIgICAgICAgICMgICAgQyAgICAjICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgIyAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgIEMgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICMgICAgICAgICAgICAgWCAgXCIsXG4gICAgXCIgICAgICAgICAgICAgQyAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgIyAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgIEMgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICMgICAgICAgXCIsXG4gICAgXCJTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTXCJdLFxuXG4gICBbXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCJQICAgWiAgIFogICBaICAgWiAgIFogIFpDXCIsXG4gICAgXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCJdXG4gIF1cbn07IFxuXG4vLyAgW1wiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4vLyAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuLy8gICBcIiAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbi8vICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgXCJdICAiLCJcbmV4cG9ydCBjbGFzcyBNb25zdGVyIHtcbiAgY29uc3RydWN0b3IocG9zX3gsIHBvc195LCBjdHgsIGdhbWVXaWR0aCwgZ2FtZUhlaWdodCl7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogcG9zX3gsIHk6IHBvc195fVxuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gIH1cblxuICBzZXRJbWFnZShsZWZ0SW1hZ2UsIHJpZ2h0SW1hZ2UpIHtcbiAgICB0aGlzLmxlZnRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubGVmdEltYWdlLnNyYyA9IGxlZnRJbWFnZVxuICAgIHRoaXMucmlnaHRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucmlnaHRJbWFnZS5zcmMgPSByaWdodEltYWdlXG4gICAgdGhpcy5tb25zdGVyID0gdGhpcy5sZWZ0SW1hZ2U7XG4gIH1cblxuICByZW5kZXJNb25zdGVyKCkge1xuICAgIHRoaXMuaGFuZGxlRWRnZUNvbGxpc2lvbigpO1xuICAgIHRoaXMucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMubW9uc3RlcixcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgICk7XG4gIH1cblxuICBoYW5kbGVFZGdlQ29sbGlzaW9uKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgICAgdGhpcy5zcGVlZCAqPSAtMTtcbiAgICAgIHRoaXMubW9uc3RlciA9IHRoaXMucmlnaHRJbWFnZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmdhbWVXaWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgICAgdGhpcy5zcGVlZCAqPSAtMTtcbiAgICAgIHRoaXMubW9uc3RlciA9IHRoaXMubGVmdEltYWdlO1xuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBTbmFpbCBleHRlbmRzIE1vbnN0ZXIge1xuICBjb25zdHJ1Y3Rvcihwb3NfeCwgcG9zX3ksIGN0eCwgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KXtcbiAgICBzdXBlcihwb3NfeCwgcG9zX3ksIGN0eCwgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KTtcbiAgICB0aGlzLnNwZWVkID0gMS41O1xuICAgIHRoaXMud2lkdGggPSBnYW1lV2lkdGggLyAyNTtcbiAgICB0aGlzLmhlaWdodCA9IGdhbWVIZWlnaHQgLyAxODtcbiAgICBsZXQgbGVmdCA9IFwiLi9zcmMvaW1hZ2VzL21vbnN0ZXJzL2xlZnQtc25haWwucG5nXCI7XG4gICAgbGV0IHJpZ2h0ID0gXCIuL3NyYy9pbWFnZXMvbW9uc3RlcnMvcmlnaHQtc25haWwucG5nXCI7XG4gICAgdGhpcy5zZXRJbWFnZShsZWZ0LCByaWdodCk7XG4gICAgdGhpcy5yZW5kZXJNb25zdGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhaXJ5IGV4dGVuZHMgTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKHBvc194LCBwb3NfeSwgY3R4LCBnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICBzdXBlcihwb3NfeCwgcG9zX3ksIGN0eCwgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KTtcbiAgICB0aGlzLnNwZWVkID0gMS44O1xuICAgIHRoaXMud2lkdGggPSBnYW1lV2lkdGggLyAyNy43Nzg7XG4gICAgdGhpcy5oZWlnaHQgPSBnYW1lSGVpZ2h0IC8gMTguNDYxNTtcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnkgLSAodGhpcy5oZWlnaHQgLSBnYW1lSGVpZ2h0IC8gMTgpO1xuICAgIGxldCBsZWZ0ID0gXCIuL3NyYy9pbWFnZXMvbW9uc3RlcnMvbGVmdC1mYWlyeS5wbmdcIjtcbiAgICBsZXQgcmlnaHQgPSBcIi4vc3JjL2ltYWdlcy9tb25zdGVycy9yaWdodC1mYWlyeS5wbmdcIjtcbiAgICB0aGlzLnNldEltYWdlKGxlZnQsIHJpZ2h0KTtcbiAgICB0aGlzLnJlbmRlck1vbnN0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGlnIGV4dGVuZHMgTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKHBvc194LCBwb3NfeSwgY3R4LCBnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICBzdXBlcihwb3NfeCwgcG9zX3ksIGN0eCwgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KTtcbiAgICB0aGlzLnNwZWVkID0gMi41O1xuICAgIHRoaXMud2lkdGggPSBnYW1lV2lkdGggLyA1MCAqIDM7XG4gICAgdGhpcy5oZWlnaHQgPSBnYW1lSGVpZ2h0IC8gMTQuNDtcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnkgLSAodGhpcy5oZWlnaHQgLSBnYW1lSGVpZ2h0IC8gMTgpO1xuICAgIGxldCBsZWZ0ID0gXCIuL3NyYy9pbWFnZXMvbW9uc3RlcnMvbGVmdC1waWcucG5nXCI7XG4gICAgbGV0IHJpZ2h0ID0gXCIuL3NyYy9pbWFnZXMvbW9uc3RlcnMvcmlnaHQtcGlnLnBuZ1wiO1xuICAgIHRoaXMuc2V0SW1hZ2UobGVmdCwgcmlnaHQpO1xuICAgIHRoaXMucmVuZGVyTW9uc3RlcigpO1xuICB9XG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlrZSB7XG4gIGNvbnN0cnVjdG9yKHBvc194LCBwb3NfeSwgY3R4LCBnYW1lV2lkdGgsIGdhbWVIZWlnaHQsKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy53aWR0aCA9IGdhbWVXaWR0aCAvIDI1O1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodCAvIDQ4O1xuICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IHBvc194LCB5OiBwb3NfeSArIHRoaXMuaGVpZ2h0ICogNS8zLjB9XG4gICAgdGhpcy5yZW5kZXJTcGlrZSgpO1xuICB9XG5cbiAgcmVuZGVyU3Bpa2UoKSB7XG4gICAgY29uc3Qgc3Bpa2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHNwaWtlSW1hZ2Uuc3JjID0gXCIuL3NyYy9pbWFnZXMvdGlsZXMvc3Bpa2VzMS5wbmdcIjtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICBzcGlrZUltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlIHtcbiAgY29uc3RydWN0b3IocG9zX3gsIHBvc195LCBjdHgsIGdhbWVXaWR0aCwgZ2FtZUhlaWdodCwpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMud2lkdGggPSBnYW1lV2lkdGggLyAyNTtcbiAgICB0aGlzLmhlaWdodCA9IGdhbWVIZWlnaHQgLyAxODtcbiAgICB0aGlzLnBvc2l0aW9uID0geyB4OiBwb3NfeCwgeTogcG9zX3kgfVxuICAgIHRoaXMucmVuZGVyVGlsZSgpO1xuICB9XG5cbiAgcmVuZGVyVGlsZSgpIHtcbiAgICBjb25zdCB0aWxlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aWxlSW1hZ2Uuc3JjID0gXCIuL3NyYy9pbWFnZXMvdGlsZXMvMDEucG5nXCI7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGlsZUltYWdlLFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==