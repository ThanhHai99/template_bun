import Elysia from "Elysia";
import cors from "@elysiajs/cors";
import bearer from "@elysiajs/bearer";
import {
  bootLogger,
  ErrorMessages,
  gracefulShutdown,
  requestLogger,
} from "./utils";
import { CoreModule } from "./modules/core/core.module";

try {
  const app = new Elysia()
    .use(cors())
    // .use(swagger())
    .use(bearer())
    .onStop(gracefulShutdown)
    .onResponse(requestLogger)
    .onError(({ code, error, set }) => ErrorMessages(code, error, set));

  // user routes and middlewares
  CoreModule(app);
  process.on("SIGINT", app.stop);
  process.on("SIGTERM", app.stop);
  app.listen(process.env.PORT!, bootLogger);
} catch (e) {
  console.log("error booting the server");
  console.error(e);
}
