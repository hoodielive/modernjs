function Tune(song, artist) {
	let title = song
	this.concat = function() {
		return title + " : " + artist;
	}
}

let happySongs = []
happySongs[0] = new Tune("Putting on the Ritz", "Ella Fitzgerald")
console.log(happySongs[0].title)
console.log(happySongs[0].concat())
