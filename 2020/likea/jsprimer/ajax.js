let request = new XMLHTTPRequest();
request.open("GET", "http://amightytextfile.txt", false);
request.send(null);

let status = request.status; 

if (status == 200) {
  console.log("The text file was found!")
} 
else if (status == 404) {
  console.log("The text file cannot be found!")
}

else {
  console.log("The server returned a status code of " + status)
}
