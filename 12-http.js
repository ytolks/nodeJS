const server = require("http")
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("welcome to home page");
      res.end();
    } else if (req.url === "/about") {
      res.write("welcome to about page");
      res.end();
    } else {
      res.end(`<h1>No page found</h1>
    <a href="/">back to main page</a>`);
    }
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");
