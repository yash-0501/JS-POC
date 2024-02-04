// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req,res)=>{
//     const log = `${new Date().toLocaleString()}: New Request Received \n`
//     fs.appendFile('log.txt', log, (err, data)=>{
//         res.end("hello!")
//     });
    
// });

// myServer.listen(8000, ()=>console.log("Server started on port 8000!"));



// Above server logs twice


// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//     if (req.url !== '/favicon.ico') {
//         const log = `${new Date().toLocaleString()}: ${req.url} New Request Received\n`;
//         fs.appendFile('log.txt', log, (err, data) => {
//             res.end("Hello!");
//         });
//     } else {
//         res.end(); // Ignore favicon.ico request
//     }
// });

// myServer.listen(8000, () => console.log("Server started on port 8000!"));



// Handling URL

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        const log = `${new Date().toLocaleString()}: ${req.url} New Request Received\n`;
        const myUrl = url.parse(req.url, true);
        console.log(myUrl);
        fs.appendFile('handlingUrlLogs.txt', log, (err, data) => {
            switch (myUrl.pathname){
                case "/":
                    res.end("Home Page!");
                    break;
                case "/about":
                    const username = myUrl.query.myname; // http://localhost:8000/about?myname=Yash+Agarwal
                    console.log(username) // Yash Agarwal
                    res.end(`Hi ${username}`);
                    break;
                default:
                    res.end("404 not Found!");
            }
            
        });
    } else {
        res.end(); // Ignore favicon.ico request
    }
});

myServer.listen(8000, () => console.log("Server started on port 8000!"));