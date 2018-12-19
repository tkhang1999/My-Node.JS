
const reqHandler = (req, res) => {
    if (req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to my first page</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>List of users</title></head>')
        res.write('<body> List of Users:');
        res.write('<ul><li>User 1</ul></li>');
        res.write('<ul><li>User 2</ul></li>');
        res.write('<ul><li>User 3</ul></li>');
        res.write('</body>');
        res.write('<html>');
        return res.end();
    }
    if (req.url === '/create-user' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title>Default Page</title></head>');
    res.write('<body><h1>Hello!!!</h1></body>');
    res.write('</html>');
    return res.end();
}

module.exports = reqHandler;