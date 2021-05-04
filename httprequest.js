const http = require("http");

http.createServer((request,  response) => {
    if(request.url === "/MishaMakhlay"){
        response.end("Misha Makhlay \nSecond course \nGroup IS-93"); 
    } else{
        response.end("Error404");
    }
}).listen(3000, () => {
    console.log("Port 3000");
});