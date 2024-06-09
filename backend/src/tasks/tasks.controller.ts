import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() task: UpdateTaskDto,
) {
    return this.tasksService.updateTask(id, task);
  }
}
