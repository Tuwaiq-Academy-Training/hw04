const { Terminal, Box } = require("command-line-draw");

const terminal = new Terminal();
const box1 = new Box(5, 5);
const box2 = new Box(5, 5);

terminal.addSprite(box1);
terminal.addSprite(box2);

box1.draw(0, 0);
box2.draw(5, 0);

box1.touching(box2);