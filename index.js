// //import onnx runtime web
// const ort = require('onnxruntime-web');

// // load tensoflow/tfjs binding
// const tf = require('@tensorflow/tfjs');

// // Add the WASM backend to the global backend registry.
// require('@tensorflow/tfjs-backend-wasm');
 
const express = require("express")
var app = express()

const port = 2000

app.use(function(req, res, next) {
        res.set("Cross-Origin-Embedder-Policy", "require-corp");
        res.set("Cross-Origin-Opener-Policy", "same-origin");
        return next();
    });
app.use(express.static('Files'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})