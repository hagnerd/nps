const getCommand = require("./get-command");

async function extendCommand(command) {
  console.log(`Extending command: '${command}'`);

  const extendedCommand = await getCommand({
    message: "Enter your command extension"
  });

  return command + " && " + extendedCommand;
}

module.exports = extendCommand;
