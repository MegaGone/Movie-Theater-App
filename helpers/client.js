const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: "http://localhost:9200",
  log: "error",
});

const search = (index, body) => {
  return client.search({ index, body });
};

const newIndex = async (name, body) => {
  return new Promise((resolve, reject) => {

    client.indices.create({
      index: name,
      body
    },function(error, resp, code){

      if(error){
        reject(err)
      }

      resolve(resp);

    })

  })
};

module.exports = {
  search,
  newIndex,
};
