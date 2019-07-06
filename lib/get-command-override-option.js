const { prompt } = require("enquirer");

const getCommandOverrideOption = async commandName => {
  if (commandName !== undefined) {
    const { option } =
      (await prompt({
        type: "select",
        name: "option",
        message:
          "Command already exists with that name. How would you like to proceed?",
        choices: ["override", "modify", "extend", "cancel"]
      })) || {};

    return option ? option : "cancel";
  } else {
    return "override";
  }
};

module.exports = getCommandOverrideOption;
