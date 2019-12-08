const axios = require('axios')
const id = "YOUR_CLIENT_ID"
const sec = "YOU_SECRET_ID"
const params = `?client_id=${id}&client_secret=${sec}`

function getProfile( username ) {
	return axios.get( `https://api.github.com/users/${username}${params}` )
		.then((data) => data)
}

function getRepos( username ) {
	return axios.get( `https://api.github.com/users/${username}/repos${params}&per_page=100` )
}

function getStarCount( repos ) {
	return repos.data.reduce(( count, { stargazers_count }) => count + stargazers_count, 0 )
}

function calculateScore ( { followers }, repos ) {
	return ( followers * 3 ) + getStarCount( repos )
}

function handleError ( error ) {
	console.warn( error )
	return null
}

function getUserData ( player ) {
	return Promise.all
}
