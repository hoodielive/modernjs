const log = console.log

let http = require('http') // this is a core module inherent within Node

// http protocol is used for fetching resources such as HTML documents. 

// there is a method is http that creates servers

// req and res are callback function params 
// that are used to node.js - queries, params, body, headers and even cookies.  

let server = http.createServer((req, res) => {

  // handle incoming requests here..  

  if (req.url == '/') {
    // Response header.
    res.writeHead(200, { 'Content-Type': 'text/html' })

    // Set response content. 
    res.write('<html><body><p>This is the home page.</p></body></html>')
    res.end()
  }
  else if (req.url == '/product') {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    res.write('<html><body><p>This is the product page.</p></body></html>')
    res.end()
  } else res.end('Invalid Request')
})

server.listen(5000)
log('Node.js web server at port 5000 is running...')
