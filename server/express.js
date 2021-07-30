const express = require("express");
const path = require("path");
const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const StaticRouter = require("react-router").StaticRouter;
const Provider = require("react-redux").Provider;
const store = require("../src/redux/store").default;
// create express application
const app = express();

// import App component
const { App } = require("../src/App");

const router = express.Router();
const routes = require("./routes")(router, {});

app.options("*", cors()); // include before other routes
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../dist")));
// Mount the middleware at "/static" to serve static content only when their request path is prefixed with "/static".
app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.use("/api", routes);

// All other GET requests not handled before will return our React app
app.use("*", (req, res) => {
    // read `index.html` file
    let indexHTML = fs.readFileSync(
        path.resolve(__dirname, "../dist/index.html"),
        {
            encoding: "utf8",
        }
    );

    let context = {};
    // get HTML string from the `App` component
    let appHTML = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );

    // populate `#app` element with `appHTML`
    indexHTML = indexHTML.replace(
        // eslint-disable-next-line quotes
        '<div id="app"></div>',
        `<div id="app">${appHTML}</div>`
    );

    // set header and status
    res.contentType("text/html");
    res.status(200);

    return res.send(indexHTML);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
