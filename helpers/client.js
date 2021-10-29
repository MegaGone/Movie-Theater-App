const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: "http://localhost:9200",
  log: "error",
});

const search = (index, body) => {
  return client.search({ index, body });
};

const newIndex = (name, body) => {
  return client.indices.create(
    {
      index: name,
      body,
    },
    function (err, res, code) {
      if (!res) {
          console.log(`${err}, ERR: ${code}`);
      }

      console.log(res);

    }
  );
};

module.exports = {
  search,
  newIndex,
};
