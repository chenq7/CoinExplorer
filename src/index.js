import "./styles/reset.css";
import "./styles/index.scss";
import CoinExplorer from './game';

const gameCanvas = document.getElementById('game-canvas');

new CoinExplorer(gameCanvas);


// const ctx = canvas.getContext("2d"); //magic paint brush that creates 2d elements

// ctx.fillRect(X, Y, W, H)

