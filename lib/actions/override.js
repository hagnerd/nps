const getCommand = require("./get-command");

async function override() {
  return getCommand();
}

module.exports = override;
