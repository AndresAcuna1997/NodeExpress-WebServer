const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    const person = {
      id: 1,
      name: "Yo",
    };

    res.write(JSON.stringify(person));
    res.end();
  })
  .listen(8080);

console.log("Listen port", 8080);
