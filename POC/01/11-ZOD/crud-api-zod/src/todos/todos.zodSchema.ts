import { z } from "zod";

const todoZSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    isDone: z.boolean().default(false).optional()
})

const todoUpdateZSchema = z.object({
    name: z.string({
        invalid_type_error: "Name must be a string",
    }).optional(),
    isDone: z.boolean().default(false).optional()
}).refine(data => data.name !== undefined || data.isDone !== undefined, {
    message: "At least one of 'name' or 'isDone' must be provided",
  });

type toDoType = z.infer<typeof todoZSchema>;

export {
    toDoType,
    todoZSchema,
    todoUpdateZSchema
}