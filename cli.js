#!/usr/bin/env node

const util = require("util");
const fs = require("fs");
const jetpack = require("fs-jetpack");

const getCommandName = require("./lib/get-command-name");
const getCommandOverrideOption = require("./lib/get-command-override-option");

const actions = require("./lib/actions");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function run() {
  try {
    // 1. Check if `package.json` file exists
    const isFile = jetpack.exists("./package.json");

    if (!isFile) {
      throw new Error(`No 'package.json' file found`);
    }

    // 2. If it exists read the file
    const raw = await readFile("./package.json");
    // 3. Because it's a json file and we want to do
    // JavaScript-y things we need to parse it first
    const package = JSON.parse(raw);

    // 4. Prompt the user for the name of the command to add,
    const commandName = await getCommandName();

    // 5. If the package.json file doesn't have a scripts object,
    // make an empty object
    let scripts = package.scripts || {};

    // 6. if the command exists, prompt the user to confirm for how they would
    // like to handle it ['cancel', 'extend', 'modify', 'override']
    const whatToDo = await getCommandOverrideOption(scripts[commandName]);

    // 7. Prompt user for command
    const command = await actions[whatToDo](scripts[commandName]);

    // 8. Add the command to the scripts object
    scripts[commandName] = command;

    // 9. Add the updated scripts object to the package
    package.scripts = scripts;

    // 10. Write the package.json file
    const newPackageJsonFile = JSON.stringify(package, null, 2);

    await writeFile("./package.json", newPackageJsonFile);

    console.log(`Successfully added command`);
  } catch (e) {
    console.log("Exiting scripter");

    if (e) {
      if (e === "cancelling") return;
      console.error(`Error: ${e}`);
    }
  }
}

run();
