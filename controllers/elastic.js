const { request, response } = require("express");
const { newIndex } = require("../helpers/client");

const createIndex = async (req = request, res = response) => {
  const { name, bodies } = req.body;

  await newIndex(name, bodies)
    .then(response => res.status(200).json({ response }))
    .catch(err => {
      console.log(err);
      return res.status(400).json({ err });
    });
};

module.exports = {
  createIndex,
};
