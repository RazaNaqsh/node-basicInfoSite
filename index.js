const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	const filePath = req.url === "/" ? "./index.html" : `.${req.url}.html`;
	let contentType = "text/html";

	fs.readFile(filePath, (error, content) => {
		if (error) {
			if (error.code == "ENOENT") {
				filePath = "./error.html";
				fs.readFile(filePath, function (error, content) {
					res.writeHead(404, { "Content-Type": contentType });
					res.end(content, "utf-8");
				});
			} else {
				res.writeHead(500);
				res.end(`Server error: ${error.code}`);
			}
		} else {
			res.writeHead(200, { "Content-Type": contentType });
			res.end(content, "utf-8");
		}
	});
});

const port = 8080;
server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
