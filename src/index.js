import "./styles/index.scss";

const canvas = document.getElementById('canvas');

canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d"); //magic paint brush that creates 2d elements

ctx.fillRect(50, 50, 50, 50);
ctx.fillRect(705, 50, 50, 50);
