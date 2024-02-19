import { Request, Response, Router } from "express";
import { toDo } from "./todo.MongooseSchema";
import { todoUpdateZSchema, todoZSchema } from "./todos.zodSchema";
import { ZodError } from "zod";
import { MongooseError } from "mongoose";

const router = Router();

router.route("/").get(async (req: Request ,res: Response)=>{
    // get all todos handler
    const allTodos = await toDo.find({});
    res.json(allTodos);
}).post(async (req:Request, res:Response)=>{
    try{
        console.log(req.body);
        const todoObj = todoZSchema.parse(req.body);
        console.log(todoObj);
        try{
            const newTodo = await toDo.create(todoObj);
            return res.status(200).send({message:"new todo created", todo: newTodo});
        }catch(err){
            return res.status(400).send(err);
        }
    }catch(e: any){
        return res.status(400).send(e.errors)
    }
})

router.route("/:id").patch(async(req: Request, res: Response)=>{
    const todoId = req.params.id;
    console.log(req.body);
    const data = req.body;
    try{
        const todoData = todoUpdateZSchema.parse(data);
        const td = await toDo.findById(todoId);
        if(!td) return res.status(404).json({error:"Invalid Todo!"});
        const updatedTodo = await toDo.findByIdAndUpdate(todoId, todoData, {
            new: true,
        });
        return res.status(200).json({message:"Todo Updated", todo:updatedTodo});
        
    }catch(err){
        if (err instanceof ZodError) {
            const errorMessage = err.errors.map((err) => err.message).join(', ');
            return res.status(404).json({ error: errorMessage});
        }else return res.status(404).json({ message: 'Some Error Occured' });
    }
}).delete(async (req:Request, res:Response)=>{
    const todoId = req.params.id;
    try{
        const td = await toDo.findById(todoId);
        if(!td) return res.status(404).json({error:"Invalid Todo!"});
        await toDo.findByIdAndDelete(todoId, );
        return res.status(200).json({message:"Todo Deleted"});
    }catch(err){
        if(err instanceof MongooseError){
            const errorMessage = err;
            return res.status(404).json({ error: 'Invalid id'});
        }else{
            return res.status(404).json({ message: 'Some Error Occured' });
        }
    }
})

export { router };