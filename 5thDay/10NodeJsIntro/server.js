// import http module from nodejs

const http=require('http')

// create Nodejs Server.
// it takes callback function as a parameter
// It should to listen to the port
// server should have the specific port No. 
http.createServer(function(req,res){
    // if connection successful,below line will execute
    console.log('My NodeJS Server started successfully')

}).listen(5000)
// to get the output in the terminal we need to start the server
// http://localhost:5000/

// Create a NodeJS API

// import url module from nodejs
const url=require('url')
// step1: Create the Route









