const getCommand = require("./get-command");

async function modify(initial) {
  return getCommand({ initial });
}

module.exports = modify;
