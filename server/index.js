const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const app = express();
const router = express.Router()
const routes = require("./routes")(router, {});


app.options("*", cors()) // include before other routes 
app.use(cors())
app.use(express.static(path.resolve(__dirname, "../dist")));
// Mount the middleware at "/static" to serve static content only when their request path is prefixed with "/static".
app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.use("/api", routes);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});