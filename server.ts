import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const host = "127.0.0.1";
const port = 3000;

const httpServer = http.createServer((req, res) => {
  const file = req.url && req.url !== "/" ? req.url : "index.html";
  const filepath = path.join(__dirname, "public", file);

  fs.readFile(filepath, (err, data) => {
    if (err == null) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

httpServer.listen(port, host, () => {
  console.log(`HTTP server running at http://${host}:${port}/`);
});
