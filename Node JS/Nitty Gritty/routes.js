const fs = require('fs');

const reqHandler = (req, res) => {
    if (req.url === '/'){
        // res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err => { // Async write
                if (err){
                    console.log(err);
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); 
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.js Server!</h1></body>');
    res.write('</html>');
    res.end(); // no more write after this line
};

// module.exports = reqHandler;

// module.exports = {
//     handler: reqHandler,
//     someText: "Some hard coded text"
// };

// module.exports.handler = reqHandler;
// module.exports.someText = "Some text";

exports.handler = reqHandler;
exports.someText = "Some hard coded text";