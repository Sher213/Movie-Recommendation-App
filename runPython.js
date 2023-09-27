const { exec } = require("child_process");
const fs = require('fs');
const http = require('http');
 
//set server
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
    });*/

    //read recommended page json
    fs.readFile('rcmmndPage.json', (err, data) => {
        if (err) throw err;
        //get knowledge graph
        let rcmmnd = JSON.parse(data)['knowledge_graph'];
        //get first key of knowledge graph (if you like...)
        rKey = Object.keys(rcmmnd)[0];

        rcmmnd[rKey].forEach(element => {
            console.log(element["name"]);
        });
    });
});
