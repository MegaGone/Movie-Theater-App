const { request, response } = require("express");
const { newIndex } = require("../helpers/client");
const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: "http://localhost:9200",
  log: "error",
});

const createIndex = async (req = request, res = response) => {
    const { name, bodies } = req.body;

    await client.indices.create({
        index: name,
        body: bodies
    }, function(err, resp, code) {

        if(err) return res.status(400).json(err);

        return res.status(200).json(resp);

    })
};

module.exports = {
  createIndex,
};
