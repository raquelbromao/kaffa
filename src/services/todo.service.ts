import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TodoDTO } from '../models/todo.dto';
import { Todo } from '../models/todo.schema';

@Injectable()
export class TodoService {

  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async getAll(): Promise<Todo[]> {
    const allTodos = await this.todoModel.find().exec();
    return allTodos;
  }

  async get(id): Promise<Todo> {
    const todo = await this.todoModel.findById(id).exec();
    return todo;
  }

  async delete(id): Promise<Todo> {
    return await this.todoModel.findByIdAndRemove(id);
  }

  async update(id, todoDTO: TodoDTO): Promise<Todo> {
    const updatedTodo = await this.todoModel.findByIdAndUpdate(id, todoDTO, { new: true });
    return updatedTodo;
  }

  async create(todoDTO: TodoDTO): Promise<Todo> {
    todoDTO.date = new Date().toISOString();
    let newTodo = await new this.todoModel(todoDTO);
    return await newTodo.save();
  }
}
