this._a = 0

function Ticker() {

};
Ticker.prototype = {
	tick: function() {
		console.log(this._a++);
	}
};
var ticker = new Ticker();
setInterval(ticker.tick, 1000);