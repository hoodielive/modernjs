const users = ['osa', 'osi', 'esejl', 'aso', 'rago', 'iwori']

users.map((user) => {

})

getTweets(uid) => {
  return fetch('https://api.users.com/' + uid)
    .then((response) => {
      return response.json() 
    })
    .then((response) => {
      return response.data 
    })
    .then((tweets) => {
      return tweets.filter((tweet) => {
        return tweet.stars > 50 
      })
    })
    .then((tweets) => {
      return tweets.filter((tweet) => {
        return tweets.rts > 50 
      }) 
    })
}

getTweets(3)
