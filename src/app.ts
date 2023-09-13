import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
import { Tasks } from "./models/Tasks.js";

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const title = await readInput("Add new task:".green);
        tasks.addTask(title);
        break;
      case "2":
        tasks.listTasks();
        break;
      case "3":
        tasks.listCompletedTasks();
        break;
      case "4":
        tasks.listPendingTasks();
        break;
      case "5":
        tasks.toggleTasks();
        break;
      case "6":
        tasks.deleteTasks();
        break;
    }

    opt !== "0" && (await pause());
  } while (opt !== "0");
};

main();
