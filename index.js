const express = require("express");
const app = express();
const logistik = require("./logistik.json");
const sdm = require("./sdm.json");
const warehouse = require("./warehouse.json");
let port = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Hello World")
})

app.get("/logistik", (req,res)=> {
    res.send(logistik);
})

app.get("/sdm", (req,res)=> {
    res.send(sdm);
})

app.get("/warehouse", (req,res)=> {
    res.send(warehouse);
})

app.listen(port,() => {
    console.log(`Example app is listening on port htpp://localhost:${port}`);
})