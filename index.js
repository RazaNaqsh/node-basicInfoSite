const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/about.html");
});
app.get("/contact", (req, res) => {
	res.sendFile(__dirname + "/contact.html");
});
app.use((req, res) => {
	res.status(404).sendFile(__dirname + "/error.html");
});
app.listen(port, () => {
	console.log(`listening on ports : ${port}`);
});
