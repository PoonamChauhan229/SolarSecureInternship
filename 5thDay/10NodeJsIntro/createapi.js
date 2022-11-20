// import http module from nodejs
const http=require('http')

// import url module from nodejs
const url=require('url')
// step1: Create the Route
http.createServer(function(req,res){

    var route=req.url // url will be present or stored

    if(route==="/"){

        // Method used to send the response to the browser
        res.end('This is information from backend to homepage')
    }
    if(route==="/getUsername"){
        usernames=["messi","ronaldo","sachin"]
        // cannot directly send array or object,, so we have to convert into string and send
        res.end(JSON.stringify(usernames))
    }
    // if connection successful,below line will execute
    console.log('My NodeJS Server started successfully')

}).listen(5000)

