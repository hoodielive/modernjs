function fetchRepos ({ language='All', minStars=0, maxStars='', createdBefore='',
	createdAfter='' }) {

}

fetchRepos({
	language: 'Golang',
	createdBefore: new Date('12/02/2019').getTime(),
	minStars: 100,
})

function getUserData (player) {
	return Promise.all([
		getProfile(player),
		getRepose(player)
	]).then(function (data) {
		var [ profile, repos ] = data;
		return {
			profile: profile,
			repos: repos
		}
	})
}
