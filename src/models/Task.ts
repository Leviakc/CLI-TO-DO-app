export class Task {
  constructor(
    public id = crypto.randomUUID(),
    public title: string,
    public done: boolean = false,
  ) {}
}
