import inquirer from "inquirer";
import "colors";

const prompQuestion = () => {
  return inquirer.prompt({
    type: "list",
    name: "option",
    message: "What do you want to do?\n",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Add new task`,
      },
      {
        value: "2",
        name: `${"2.".green} List tasks`,
      },
      {
        value: "3",
        name: `${"3.".green} List completed tasks`,
      },
      {
        value: "4",
        name: `${"4.".green} List pending tasks`,
      },
      {
        value: "5",
        name: `${"5.".green} Complete task(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Delete task`,
      },
      {
        value: "0",
        name: `${"0.".green} Exit`,
      },
    ],
  });
};

export const inquirerMenu = async () => {
  console.clear();

  console.log(`===========================`.green);
  console.log("  Choose an option".white);
  console.log("===========================\n".green);

  const { option } = await prompQuestion();

  return option;
};

export const pause = async () => {
  console.log("\n");
  await inquirer.prompt({
    type: "input",
    name: "ENTER",
    message: `Presione ${"ENTER".green} para continuar\n`,
  });
};

export const readInput = async (message: string) => {
  console.log("\n");

  const { title } = await inquirer.prompt({
    type: "input",
    name: "title",
    message,
    validate(value) {
      if (value.length === 0) {
        return "Please enter a title task";
      }
      return true;
    },
  });
  return title;
};
