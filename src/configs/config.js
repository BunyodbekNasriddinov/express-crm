import "dotenv/config.js";

export default {
  pg: {
    connectionString: process.env.connectionString,
  },
};
