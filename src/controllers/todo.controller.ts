import { Controller, Get, Delete, Put, Post, Param, Body, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { TodoDTO } from '../models/todo.dto';


@Controller('/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll(@Res() res) {
    const allTodos = await this.todoService.getAll();
    return res.status(HttpStatus.OK).json(allTodos);
  }

  @Get('/:id')
  async get(@Res() res, @Param('id') id: string) {
    const todo = await this.todoService.get(id);
    if (!todo) throw new NotFoundException('TODO does not exist!');
    return res.status(HttpStatus.OK).json(todo);
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const deletedTodo = await this.todoService.delete(id);
    return (deletedTodo) ? 
      res.status(HttpStatus.OK).json({message: "TODO has been deleted succesfully"}) :
      res.status(HttpStatus.NOT_FOUND).json({message: "TODO was not found"});
  }

  @Put('/:id')
  async update(@Res() res, @Body() todoItem: TodoDTO,  @Param('id') id: string) {
    const modifiedTodo = await this.todoService.update(id, todoItem);
    return res.status(HttpStatus.OK).json({
      message: "TODO has been updated successfully",
      modifiedTodo
    })
  }

  @Post()
  async create(@Res() res, @Body() todoItem: TodoDTO) {
    const newTodo = await this.todoService.create(todoItem);
    return res.status(HttpStatus.OK).json({
      message: "TODO has been created successfully",
      newTodo
    })
  }
}
