const { Terminal } = require('command-line-draw');

const terminal = new Terminal();
terminal.sevenSegment(0, 0, true, true, true, true, true, true, false); // Prints '0', although there multiple easier ways to do this