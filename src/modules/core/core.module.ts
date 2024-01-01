import { Elysia } from "elysia";
import { TasksController, NotesController } from "./../../modules";

export function CoreModule(app: Elysia) {
  app.use(TasksController);
  app.use(NotesController);
}

// TODO: add auth
