{
	const chalk = require("chalk");
	const colors = require("./colors.json");

	let css = {};

	function cssColorImpl(name) {
		return chalk.hex(colors[name]);
	}
	for (let colorKey in colors) {
		css[colorKey] = cssColorImpl(colorKey);
	}

	module.exports = css
}