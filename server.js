//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<harare-stands>'
app.use(express.static(__dirname + "/dist/<harare-stands>"));

app.get("*", function (req, res) {
  // Replace the '/dist/<harare-stands>/index.html'
  res.sendFile(path.join(__dirname + "/dist/<harare-stands>/index.html"));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
