const http = require("http");
const fs = require("fs");

http
	.createServer((req, res) => {
		if (req.url === "/") {
			fs.readFile("index.html", (err, content) => {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(content);
				return res.end();
			});
		} else if (req.url === "/about") {
			fs.readFile("about.html", (err, content) => {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(content);
				return res.end();
			});
		} else if (req.url === "/contact") {
			fs.readFile("contact.html", (err, content) => {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(content);
				return res.end();
			});
		} else {
			fs.readFile("error.html", (err, content) => {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(content);
				return res.end();
			});
		}
	})
	.listen(1704, () => {
		console.log("listening on port 1704");
	});
