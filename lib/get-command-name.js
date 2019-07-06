const { prompt } = require("enquirer");

const getCommandName = async () => {
  const { commandName } =
    (await prompt({
      type: "input",
      name: "commandName",
      message: "Enter the name of the command"
    })) || {};

  if (commandName === undefined) {
    throw new Error("No command name entered");
  }

  return commandName;
};

module.exports = getCommandName;
