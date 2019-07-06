const { prompt } = require("enquirer");

async function getCommand({
  initial = "",
  message = "Enter your command"
} = {}) {
  const { command } = await prompt({
    type: "input",
    initial,
    name: "command",
    message
  });

  return command;
}

module.exports = getCommand;
