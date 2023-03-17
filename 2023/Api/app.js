const axios = require('axios')

// Setup the request parameters

const endpoint = "https://insight-javadoc.riada.io/insight-javadoc-8.6/insight-rest/"

const headers = 
{
  'Authorization' : 'Creds-base64',
  'Accept': 'application/json'
}

const query = 'SELECT * FROM Object'

// Send the request
axios.get(endpoint, {
  headers: headers,
  params: {
    query: query
  }
})
.then(response => {
  console.log(response.dataj)
})
.catch(error => {
  console.log(error)
})
