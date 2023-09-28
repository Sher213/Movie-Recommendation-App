const execSync = require("child_process").execSync;
const fs = require('fs');
const http = require('http');
const qs = require('querystring');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

app.get('/', function(req, res, next){
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });

});

app.post('/', function (req, res, next){

    res.send(req.body["input"]);
    console.log(req.body["input"]);

    let input = 

    execSync('python movieRec.py "' + req.body["input"] + '"', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    //read recommended page json
    fs.readFile('rcmmndPage.json', (err, data) => {
        if (err) throw err;
        //get knowledge graph
        let rcmmnd = JSON.parse(data)['knowledge_graph'];
        //get first key of knowledge graph (if you like...)
        rKey = Object.keys(rcmmnd)[0];

        let x = "";
        rcmmnd[rKey].forEach(element => {
            x += (element["name"]+ " ");
        });
        console.log(x)
    });
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

/*//set server
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {

    /*exec("python movieRec.py 'Shawshank Redemption'", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    //read recommended page json
    fs.readFile('rcmmndPage.json', (err, data) => {
        if (err) throw err;
        //get knowledge graph
        let rcmmnd = JSON.parse(data)['knowledge_graph'];
        //get first key of knowledge graph (if you like...)
        rKey = Object.keys(rcmmnd)[0];

        let x = "";
        rcmmnd[rKey].forEach(element => {
            x += (element["name"]+ " ");
        });
        console.log(x)
    });
});*/
