var Westeros;
(function (Westeros) {
	var Ruler = (function () {
		function Ruler() {
			this.house = new Westeros.Houses.Targaryen();
		}
		return Ruler;
	})();
	Westeros.Ruler = Ruler;
}) (Westeros || (Westeros = {}));

console.log(Westeros);
