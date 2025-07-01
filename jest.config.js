const path = require("path");

module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
  moduleNameMapper: {
    "^@/(.*)$": path.join("<rootDir>", "src", "$1").replace(/\\/g, "/"),
  },
};
