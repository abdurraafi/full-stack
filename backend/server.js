const server = require("http").createServer(
  (req /* request */, res /* response */) => {
    res.end("Hello from backend server!");
  }
);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
