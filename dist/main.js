!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=2)}([function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0),i(1);function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var n=function(){function t(e,i,s,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameWidth=e,this.gameHeight=i,this.characterWidth=39.99,this.characterHeight=39.99,this.jumping=!1,this.x_velocity=0,this.y_velocity=0,this.position={x:s,y:n},this.prevPosition={x:s,y:n},this.flipped=!1,this.setSound(),this.setImage(),this.left=!1,this.right=!1,this.up=!1,document.addEventListener("keydown",(function(t){switch(t.keyCode){case 37:o.left=!0;break;case 32:case 38:o.up=!0;break;case 39:o.right=!0}})),document.addEventListener("keyup",(function(t){switch(t.keyCode){case 37:o.left=!1;break;case 32:case 38:o.up=!1;break;case 39:o.right=!1}}))}var e,i,n;return e=t,(i=[{key:"getLeft",value:function(){return this.position.x}},{key:"getRight",value:function(){return this.position.x+this.characterWidth}},{key:"getTop",value:function(){return this.position.y}},{key:"getBottom",value:function(){return this.position.y+this.characterHeight}},{key:"getPrevLeft",value:function(){return this.prevPosition.x}},{key:"getPrevRight",value:function(){return this.prevPosition.x+this.characterWidth}},{key:"getPrevTop",value:function(){return this.prevPosition.y}},{key:"getPrevBottom",value:function(){return this.prevPosition.y+this.characterHeight}},{key:"setLeft",value:function(t){this.position.x=t}},{key:"setRight",value:function(t){this.position.x=t-this.characterWidth}},{key:"setTop",value:function(t){this.position.y=t}},{key:"setBottom",value:function(t){this.position.y=t-this.characterHeight}},{key:"setPrevLeft",value:function(t){this.prevPosition.x=t}},{key:"setPrevRight",value:function(t){this.prevPosition.x=t-this.characterWidth}},{key:"setPrevTop",value:function(t){this.prevPosition.y=t}},{key:"setPrevBottom",value:function(t){this.prevPosition.y=t-this.characterHeight}},{key:"setSound",value:function(){this.coinSound=new Audio("./src/audio/sound/coin-sound.mp3"),this.coinSound.volume=.4,this.jumpSound=new Audio("./src/audio/sound/jump.mp3")}},{key:"setImage",value:function(){this.characterImage=new Image,this.characterImage.src="./src/images/slime/slime.png",this.leftImage=new Image,this.leftImage.src="./src/images/slime/left-slime.png",this.rightImage=new Image,this.rightImage.src="./src/images/slime/right-slime.png"}},{key:"play",value:function(t){t.pause(),t.currentTime=0,t.play()}},{key:"renderCharacter",value:function(t){t.drawImage(this.characterImage,this.position.x,this.position.y,this.characterWidth,this.characterHeight)}},{key:"updateCharacter",value:function(){this.up&&0==this.jumping&&(this.play(this.jumpSound),this.y_velocity-=36,this.jumping=!0),this.left&&(this.flipped||(this.flipped=!0,this.characterImage=this.leftImage),this.x_velocity-=.9),this.right&&(this.flipped&&(this.flipped=!1,this.characterImage=this.rightImage),this.x_velocity+=.9),this.y_velocity+=1.3,this.prevPosition.x=this.position.x,this.prevPosition.y=this.position.y,this.position.x+=this.x_velocity,this.position.y+=this.y_velocity,this.x_velocity*=.85,this.y_velocity*=.85}},{key:"update",value:function(t,e,i,s){var n,o,r,h,a;return this.updateCharacter(),this.handleEdgeCollision(),r=Math.floor(this.getTop()/40),n=Math.floor(this.getLeft()/40),a=t[r][n],this.handleTileCollision(a,40*n,40*r,40),r=Math.floor(this.getTop()/40),o=Math.floor(this.getRight()/40),a=t[r][o],this.handleTileCollision(a,40*o,40*r,40),h=(h=Math.floor(this.getBottom()/40))>17?17:h,n=Math.floor(this.getLeft()/40),a=t[h][n],this.handleTileCollision(a,40*n,40*h,40),h=(h=Math.floor(this.getBottom()/40))>17?17:h,o=Math.floor(this.getRight()/40),a=t[h][o],this.handleTileCollision(a,40*o,40*h,40),this.getBottom()>this.gameHeight&&this.setBottom(this.gameHeight),!!this.handleMonsterCollision(s)||!!this.handleSpikeCollision(i)||this.handleCoinCollision(e)}},{key:"handleEdgeCollision",value:function(){this.getLeft()<0&&(this.setPrevLeft(this.getLeft()),this.setLeft(0)),this.getRight()>this.gameWidth&&(this.setPrevRight(this.getRight()),this.setRight(this.gameWidth)),this.getTop()<0&&(this.setPrevTop(this.getTop()),this.setTop(0)),this.getBottom()>this.gameHeight&&(this.setPrevBottom(this.getBottom()),this.setBottom(this.gameHeight),this.jumping=!1)}},{key:"handleCoinCollision",value:function(t){for(var e=0;e<t.length;e++)this.getLeft()<t[e].position.x+t[e].width&&this.getLeft()+t[e].width>t[e].position.x&&this.getTop()<t[e].position.y+t[e].height&&this.getBottom()>t[e].position.y&&(this.play(this.coinSound),t.splice(e,1));return t}},{key:"handleSpikeCollision",value:function(t){for(var e=0;e<t.length;e++)if(this.getLeft()<t[e].position.x+t[e].width&&this.getLeft()+t[e].width>t[e].position.x&&this.getTop()<t[e].position.y+t[e].height&&this.getBottom()>t[e].position.y)return!0;return!1}},{key:"handleMonsterCollision",value:function(t){for(var e=0;e<t.length;e++)if(this.getLeft()<t[e].position.x+t[e].width&&this.getLeft()+t[e].width>t[e].position.x&&this.getTop()<t[e].position.y+t[e].height&&this.getBottom()>t[e].position.y)return!0;return!1}},{key:"handleTileCollision",value:function(t,e,i,s){if(t instanceof Object&&"Tile"===t.constructor.name){if(this.topTileCollision(i))return;if(this.leftTileCollision(e))return;if(this.rightTileCollision(e+s))return}}},{key:"topTileCollision",value:function(t){return this.getBottom()>t&&this.getPrevBottom()<=t&&(console.log("colloding with top tile"),this.setPrevBottom(this.getBottom()),this.setBottom(t-.01),this.jumping=!1,!0)}},{key:"leftTileCollision",value:function(t){return this.getRight()>t&&this.getPrevRight()<=t&&(this.setPrevRight(this.getRight()),this.setRight(t-.01),!0)}},{key:"rightTileCollision",value:function(t){return this.getLeft()<t&&this.getPrevLeft()>=t&&(this.setPrevLeft(this.getLeft()),this.setLeft(t),!0)}},{key:"bottomTileCollision",value:function(t){return this.getTop()<t&&this.getPrevTop()>=t&&(this.setPrevTop(this.getTop()),this.setTop(t),!0)}}])&&s(e.prototype,i),n&&s(e,n),t}();function o(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var r=function(){function t(e,i,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=s,this.width=40,this.height=40,this.position={x:e,y:i},this.renderTile()}var e,i,s;return e=t,(i=[{key:"renderTile",value:function(){var t=new Image;t.src="./src/images/tiles/01.png",this.ctx.drawImage(t,this.position.x,this.position.y,this.width,this.height)}}])&&o(e.prototype,i),s&&o(e,s),t}();function h(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var a=function(){function t(e,i,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=s,this.width=40,this.height=40,this.position={x:e,y:i},this.renderCoin()}var e,i,s;return e=t,(i=[{key:"renderCoin",value:function(){var t=new Image;t.src="./src/images/items/coin-gold.png",this.ctx.drawImage(t,this.position.x,this.position.y,this.width,this.height)}}])&&h(e.prototype,i),s&&h(e,s),t}();function c(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var l=function(){function t(e,i,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=s,this.width=40,this.height=15,this.position={x:e,y:i+25},this.renderSpike()}var e,i,s;return e=t,(i=[{key:"renderSpike",value:function(){var t=new Image;t.src="./src/images/tiles/spikes1.png",this.ctx.drawImage(t,this.position.x,this.position.y,this.width,this.height)}}])&&c(e.prototype,i),s&&c(e,s),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var y=function(){function t(e,i,s,n,o){d(this,t),this.position={x:e,y:i},this.ctx=s,this.gameWidth=n,this.gameHeight=o}var e,i,s;return e=t,(i=[{key:"setImage",value:function(t,e){this.leftImage=new Image,this.leftImage.src=t,this.rightImage=new Image,this.rightImage.src=e,this.monster=this.leftImage}},{key:"renderMonster",value:function(){this.handleEdgeCollision(),this.position.x-=this.speed,this.ctx.drawImage(this.monster,this.position.x,this.position.y,this.width,this.height)}},{key:"handleEdgeCollision",value:function(){this.position.x<0&&(this.position.x=0,this.speed*=-1,this.monster=this.rightImage),this.position.x+this.width>this.gameWidth&&(this.position.x=this.gameWidth-this.width,this.speed*=-1,this.monster=this.leftImage)}}])&&v(e.prototype,i),s&&v(e,s),t}(),S=function(t){function e(t,i,s,n,o){var r;d(this,e),(r=g(this,f(e).call(this,t,i,s,n,o))).speed=1.5,r.width=40,r.height=40;return r.setImage("./src/images/monsters/left-snail.png","./src/images/monsters/right-snail.png"),r.renderMonster(),r}return p(e,t),e}(y),x=function(t){function e(t,i,s,n,o){var r;d(this,e),(r=g(this,f(e).call(this,t,i,s,n,o))).speed=1.8,r.width=36,r.height=39,r.position.y=r.position.y-(r.height-40);return r.setImage("./src/images/monsters/left-fairy.png","./src/images/monsters/right-fairy.png"),r.renderMonster(),r}return p(e,t),e}(y),b=function(t){function e(t,i,s,n,o){var r;d(this,e),(r=g(this,f(e).call(this,t,i,s,n,o))).speed=2.5,r.width=60,r.height=50,r.position.y=r.position.y-(r.height-40);return r.setImage("./src/images/monsters/left-pig.png","./src/images/monsters/right-pig.png"),r.renderMonster(),r}return p(e,t),e}(y);function k(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var w=function(){function t(e,i,s,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=s,this.currLevel=o,this.gameWidth=e,this.gameHeight=i,this.board=n,this.coinsArr=[],this.tilesArr=[],this.spikesArr=[],this.monsters=[],this.tree=new Image,this.tree.src="./src/images/bg/sakura.png",this.grass=new Image,this.grass.src="./src/images/tiles/grass.png",this.initializeBoard()}var e,i,s;return e=t,(i=[{key:"initializeBoard",value:function(){for(var t,e,i,s=0;s<this.board.length;s++){i=[];for(var o=0;o<this.board[0].length;o++)if(e=40*s,t=40*o,"#"===this.board[s][o]){var h=new r(t,e,this.ctx);i.push(h),this.tilesArr.push(h)}else if("P"===this.board[s][o])this.character=new n(this.gameWidth,this.gameHeight,t,e),i.push(this.character);else if("C"===this.board[s][o]){var c=new a(t,e,this.ctx);i.push(c),this.coinsArr.push(c)}else if("S"===this.board[s][o]){var u=new l(t,e,this.ctx);i.push(u),this.spikesArr.push(u)}else if("Z"===this.board[s][o]){var g=new S(t,e,this.ctx,this.gameWidth,this.gameHeight);i.push(g),this.monsters.push(g)}else if("X"===this.board[s][o]){var f=new x(t,e,this.ctx,this.gameWidth,this.gameHeight);i.push(f),this.monsters.push(f)}else if("V"===this.board[s][o]){var p=new b(t,e,this.ctx,this.gameWidth,this.gameHeight);i.push(p),this.monsters.push(p)}else i.push(" ");this.board[s]=i}this.numCoins=this.coinsArr.length}},{key:"updateBoard",value:function(t){if(t){1===this.currLevel&&(this.ctx.drawImage(this.tree,40,-20,175,300),this.ctx.drawImage(this.tree,900,80,120,200));for(var e=0;e<this.tilesArr.length;e++)this.tilesArr[e].renderTile();for(var i=0;i<this.coinsArr.length;i++)this.coinsArr[i].renderCoin();for(var s=0;s<this.spikesArr.length;s++)this.spikesArr[s].renderSpike();for(var n=0;n<this.monsters.length;n++)this.monsters[n].renderMonster();var o=this.coinsArr.length,r=this.character.update(this.board,this.coinsArr,this.spikesArr,this.monsters);return"boolean"==typeof r||(this.coinsArr=r,this.character.renderCharacter(this.ctx),o-this.coinsArr.length)}}}])&&k(e.prototype,i),s&&k(e,s),t}();function C(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.getContext("2d"),this.gameWidth=e.width,this.gameHeight=e.height,this.gameRunning=!1,this.currentLevel=1,this.muted=!1,this.setSound(),this.renderHomeScreen(),this.addListeners()}var e,i,s;return e=t,(i=[{key:"setSound",value:function(){this.menuMusic=new Audio("./src/audio/music/main-menu.mp3"),this.menuMusic.volume=.3,this.menuMusic.loop=!0,this.gameMusic=new Audio("./src/audio/music/background.mp3"),this.gameMusic.loop=!0,this.winMusic=new Audio("./src/audio/music/victory.mp3"),this.winMusic.loop=!0,this.winMusic.volume=.35,this.selectSound=new Audio("./src/audio/sound/select.wav")}},{key:"play",value:function(t){this.muted||(t.pause(),t.currentTime=0,t.play())}},{key:"pauseAllMusic",value:function(){this.menuMusic.pause(),this.gameMusic.pause(),this.winMusic.pause()}},{key:"addListeners",value:function(){var t=this;document.addEventListener("click",(function(e){t.gameRunning||t.muted||t.menuMusic.play()})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(t.gameRunning=!1,t.pauseAllMusic(),t.play(t.selectSound),t.play(t.menuMusic),t.renderHomeScreen()),77===e.keyCode&&(t.muted?(t.gameRunning?t.gameMusic.play():t.menuMusic.play(),t.muted=!1):(t.pauseAllMusic(),t.muted=!0))}))}},{key:"renderHomeScreen",value:function(){this.ctx.clearRect(0,0,this.gameWidth,this.gameHeight),this.ctx.font="bold 80px Arial",this.ctx.fillStyle="yellow",this.ctx.fillText("COIN EXPLORER",170,300),this.ctx.strokeStyle="blue",this.ctx.lineWidth=2,this.ctx.strokeText("COIN EXPLORER",170,300),this.ctx.fillStyle="blue",this.ctx.font="bold 30px Arial",this.ctx.fillText("Press Enter to Begin!",350,500),this.ctx.font="bold 20px Arial",this.ctx.fillText("Press esc to go back to home screen",340,560);var t=new Image;t.src="./src/images/items/coin-gold.png",t.onload=function(){this.ctx.drawImage(t,280,470,40,40)}.bind(this);var e=new Image;e.src="./src/images/slime/slime.png",e.onload=function(){this.ctx.drawImage(e,280,530,40,40)}.bind(this),this.checkEnter=this.checkEnter.bind(this),document.addEventListener("keydown",this.checkEnter)}},{key:"checkEnter",value:function(t){13===t.keyCode&&(this.play(this.selectSound),document.removeEventListener("keydown",this.checkEnter),this.currentLevel=1,this.newGame())}},{key:"renderGameOver",value:function(){this.ctx.clearRect(0,0,this.gameWidth,this.gameHeight),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.gameWidth,this.gameHeight),this.ctx.font="bold 80px Arial",this.ctx.fillStyle="white",this.ctx.fillText("GAME OVER",250,300),this.ctx.font="bold 30px Arial",this.ctx.fillText("Press r key to retry level",325,500),this.ctx.font="bold 20px Arial",this.ctx.fillText("Press esc to go back to home screen",325,560);var t=new Image;t.onload=function(){this.ctx.drawImage(t,730,500,298,200)}.bind(this),t.src="./src/images/slime/sad-slime.png",this.checkRestart=this.checkRestart.bind(this),document.addEventListener("keydown",this.checkRestart)}},{key:"checkRestart",value:function(t){82===t.keyCode&&(this.play(this.selectSound),document.removeEventListener("keydown",this.checkRestart),this.gameRunning=!0,this.newGame())}},{key:"renderWin",value:function(){this.gameMusic.pause(),this.play(this.winMusic),this.ctx.clearRect(0,0,this.gameWidth,this.gameHeight),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.gameWidth,this.gameHeight),this.ctx.font="bold 80px Arial",this.ctx.fillStyle="white",this.ctx.fillText("YOU WIN!",300,200),this.ctx.font="bold 30px Arial",this.ctx.fillText("Congrats on beating the game!",280,500),this.ctx.font="bold 20px Arial",this.ctx.fillText("Press esc to go back to home screen",325,560);var t=new Image;t.onload=function(){this.ctx.drawImage(t,430,250,139,149)}.bind(this),t.src="./src/images/items/chest-gold-close.png"}},{key:"newGame",value:function(){this.gameRunning||(this.menuMusic.pause(),this.play(this.gameMusic)),this.ctx.fillStyle="black",this.gameRunning=!0,this.coins=0,this.time=60,this.prevTime=0,this.levels=[[],["                         ","       C C C C C C       ","       ############      ","     #                   ","   #                     "," #                    X  ","                         ","###################    ##","                    ##   ","C     C C C C C C C      ","#     #############      ","##C                      ","####S               SSSSS","###### C            #####","       #                 ","         #               ","               P        V","#########################"],["                         ","                         ","                C   C    ","               ##   #   X","             C           ","            ##           ","          C              ","         ##              ","       C                 ","      ##    SSSSSSSSSSSSS","   C        #############","   ##                    ","       C                 ","       ##                ","           C            X","           ##            ","               P         ","#SSSSSSSSSSSSS###SSSSSSSS"],["                         ","                        X","CCCC                     ","####                     ","      ##   C             ","           ##  C         ","         C     ##        ","        ##        C     C","      C           ##     ","     ##                 S","                      ###","  SC                     ","  ##            CS ##    ","      CS       ###       ","      ##   C             ","           ##            ","               P         ","#SSSSSSSSSSSSS###SSSSSSSS"],[" P                       ","####                     ","       C   C   C   C   C ","      ##   #   #   #   #X","                         ","                         ","             C           ","             #           ","        C         C      ","        #    C    #      ","             #           ","        C                ","        #             X  ","             C           ","             #           ","                 C       ","                 #       ","SSSSSSSSSSSSSSSSSSSSSSSSS"],["                         ","                         ","                         ","                         ","                         ","                         ","                         ","                         ","P   Z   Z   Z   Z   Z  ZC","#########################","                         ","                         ","                         ","                         ","                         ","                         ","                         ","                         "]],this.maxLevel=this.levels.length-1,this.board=new w(this.gameWidth,this.gameHeight,this.ctx,this.levels[this.currentLevel],this.currentLevel),this.gameLoop=this.gameLoop.bind(this),this.gameLoop()}},{key:"gameLoop",value:function(t){if(this.gameRunning){var e=t-this.prevTime;this.prevTime=t,this.ctx.clearRect(0,0,this.gameWidth,this.gameHeight),this.renderCoins(this.coins);var i=this.board.updateBoard(e);"boolean"!=typeof i?(this.coins+=isNaN(i)?0:i,this.coins>=this.board.numCoins?this.currentLevel<this.maxLevel?(this.currentLevel+=1,this.newGame()):this.renderWin():requestAnimationFrame(this.gameLoop)):this.renderGameOver()}}},{key:"renderCoins",value:function(t){this.ctx.font="20px Arial",this.ctx.fillText("Coins:",this.gameWidth-110,30),this.ctx.fillText(t,this.gameWidth-40,30)}}])&&C(e.prototype,i),s&&C(e,s),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("game-canvas");new T(t)}))}]);
//# sourceMappingURL=main.js.map