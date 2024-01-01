import { NotFoundError } from "elysia";
import { Repository } from "typeorm";
import AppDataSource from "../config/database.service";
import { Note } from "./note.repository";

export default class NotesService {
  private readonly model: Repository<Note> = AppDataSource.getRepository(Note);

  async getAll(limit?: number): Promise<any> {
    const notes = this.model.find();
    return notes;
  }

  // async createNote(data: InsertNote): Promise<Note> {
  //   console.log(data);
  //   const result = await db
  //     .insert(notes)
  //     .values({ content: data.content })
  //     .returning();
  //   // .returning({ id: notes.id, content: notes.content });
  //   return result[0];
  // }

  async getOne(id: string): Promise<Note> {
    const result = await this.model.findOneBy({ id });
    if (!result) throw new NotFoundError();

    return result;
  }

  // async updateNote(data: InsertNote): Promise<Note> {
  //   const result = await db
  //     .update(notes)
  //     .set({ content: data.content })
  //     .where(eq(notes.id, data.id!))
  //     .returning();
  //   console.log(result);
  //   if (result.length > 0) {
  //     return result[0];
  //   }
  //   throw new NotFoundError();
  // }

  // async deleteNote(id: number): Promise<undefined> {
  //   await db.delete(notes).where(eq(notes.id, id));
  // }
}
