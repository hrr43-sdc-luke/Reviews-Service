const cassandra = require('cassandra-driver');

const { distance } = cassandra.types;

require('dotenv').config();

const client = new cassandra.Client({
  contactPoints: [process.env.CSCONTACTPOINT],
  pooling: {
    coreConnectionsPerHost: {
      [distance.local]: 2,
      [distance.remote]: 1,
    },
    maxConnectionsPerHost: {
      [distance.local]: 32768,
      [distance.remote]: 2000,
    },
  },
  localDataCenter: process.env.CSDATACENTER,
  keyspace: process.env.CSKEYSPACE,
});

module.exports = client;
