import Elysia from "Elysia";
import { TasksController } from "./../../modules";

export function CoreModule(app: Elysia) {
  app.use(TasksController); // without database
  // app.use(NotesController); // with database
  // app.use(NotesController); // with auth middleware + database
}

// TODO: add auth
