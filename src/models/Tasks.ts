import { Task } from "./Task.js";

export class Tasks {
  public taskLists: Task[];
  constructor() {
    this.taskLists = [];
  }

  addTask(title: string) {
    const task = new Task(undefined, title.trim(), undefined);
    this.taskLists = [...this.taskLists, task];
  }

  listTasks() {
    console.log();
    this.taskLists.forEach((task, index) =>
      console.log(`${(index + 1 + ".").blue} ${task.title}`),
    );
  }

  listCompletedTasks() {}

  listPendingTasks() {}

  toggleTasks() {}

  deleteTasks() {}
}
