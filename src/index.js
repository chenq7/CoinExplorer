import "./styles/reset.css";
import "./styles/index.scss";
import CoinExplorer from './scripts/game';

const gameCanvas = document.getElementById('game-canvas');

const x = window.matchMedia("(max-width: 1280px)");
if (x.matches){
  gameCanvas.height = "612";
  gameCanvas.width = "850";
}

document.addEventListener("DOMContentLoaded", () => {
  new CoinExplorer(gameCanvas);
});

