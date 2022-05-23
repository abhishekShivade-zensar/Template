const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

const filename = './student.ejs';
const students = [
    {name: 'Rick LaRue', age: 23},
    {name: 'Sarah Cathands', age: 25},
    {name: 'Bob Dobbs', age: 37}
];

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        fs.readFile(filename, (err, data) => {
            if(err) console.error();
            const template = data.toString();
            const context = {students: students};
            const output = ejs.render(template, context);
            res.setHeader('Content-type', 'text/html');
            res.end(output);
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(3000);
console.log('http://localhost:3000');