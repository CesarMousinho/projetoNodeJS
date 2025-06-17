const http = require("http");
const port = 8080;
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1><p>Welcome to the home page!</p>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "John Doe",
        age: 30,
        email: "jhon@doe.com",
      },
      {
        name: "Jane Doe",
        age: 25,
        email: "Jane@doe.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});
server.listen(port, () => {
  console.log("Rodando na porta" + port);
});

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
