const express = require("express");

const app = express();

app.use(express.json());
app.get("/", async (req, res) => {
    res.send("<h1>hello server</h1>");
});


app.get("/why", async (req, res) => {
    res.send("<h1>why????</h1>");
});

const start = () => {
    try {
        app.listen(3000, () => {
            console.log(`server start port ${3000}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
