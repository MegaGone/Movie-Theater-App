const { request, response } = require("express");
const { newIndex, deleteElasticIndex } = require("../helpers/client");

const createIndex = async (req = request, res = response) => {
  const { name, bodies } = req.body;

  const tempName = name.toLowerCase();

  await newIndex(tempName, bodies)
    .then(response => res.status(200).send(`INDEX was created like ${tempName}`))
    .catch(err => {
      console.log(err);
      return res.status(400).json({ err });
    });
};

const deleteIndex = async (req = request, res = response) => {

  const { name } = req.body;

  await deleteElasticIndex(name)
    .then((resp) => res.status(200).send(`Index ${name} deleted.`))
    .catch((e) => {
      console.log(e);
      return res.status(400).send(`Error to delete ${name} index.`);
    })
};

module.exports = {
  createIndex,
  deleteIndex
};
