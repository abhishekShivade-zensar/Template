const pug = require('pug');
const http = require('http');
const template = 'strong #{message}';
const context = {message:'Hello template!'};
const fn = pug.compile(template);

// console.log(fn(context));

const server = http.createServer((req,res) => {
    if (req.url === '/'){
            const output = pug.render(fn(context));
            res.setHeader('Content-type', 'text/html');
            res.end(output);
    }
});

server.listen(3000);
console.log('http://localhost:3000');