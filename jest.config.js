module.exports = {
  // Have to use babel for tests until next js supports the relay transform for jest compilation
  transform: {
    "\\.[jt]sx?$": [
      "babel-jest",
      {
        presets: ["next/babel"],
        plugins: ["relay"],
      },
    ],
  },

  testEnvironment: "jsdom",

  modulePaths: ["<rootDir>"],
};
