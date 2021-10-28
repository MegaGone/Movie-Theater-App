const { response, request } = require("express");

const helloWorld = async (req = request, res = response) => {
    res.send("Hello world")
}

module.exports = {
    helloWorld
}