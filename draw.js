const { Terminal } = require("command-line-draw");

const terminal = new Terminal();

const Margin = terminal.margin.constructor;
const myMargin = new Margin(process.stdout, terminal.width, terminal.height); 
