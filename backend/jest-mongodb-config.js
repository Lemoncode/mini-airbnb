module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: "4.4.6",
      skipMD5: true,
    },
    instance: {
      dbName: "test-hrental",
      port: 27017,
    },
    autoStart: false,
  },
};
