import { Schema, model } from 'mongoose';
import { toDoType } from './todos.zodSchema';

const todoSchema = new Schema<toDoType>({
  name: { type: String, required: true },
  isDone: { type: Boolean, required: false, default: false },
});

const toDo = model<toDoType>("Todo", todoSchema);

export {
    toDo,
}