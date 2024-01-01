import "reflect-metadata";
import { DataSource } from "typeorm";
import { Note } from "../notes/note.repository";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "template_bun",
  synchronize: true,
  logging: true,
  entities: [Note],
});

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));

export default AppDataSource;
