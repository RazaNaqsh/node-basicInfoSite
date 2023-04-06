// create a server,
// check req.url and according to conditon
// readfile,
// write res head, and res data
// lastly listen on any port, with callback loggin
const http = require("http");
const fs = require("fs");

http
	.createServer((req, res) => {
		if (req.url === "/") {
			fs.readFile("index.html", (err, content) => {
				res.write(content);
				return res.end();
			});
		} else if (req.url === "/about") {
			fs.readFile("about.html", (err, content) => {
				res.write(content);
				return res.end();
			});
		} else if (req.url === "/contact") {
			fs.readFile("contact.html", (err, content) => {
				res.write(content);
				return res.end();
			});
		} else {
			fs.readFile("error.html", (err, content) => {
				res.write(content);
				return res.end();
			});
		}
	})
	.listen(1704, () => {
		console.log("listening on port 1704");
	});
