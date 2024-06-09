import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  createTask(task: CreateTaskDto) {
    return this.taskRepository.save(task);
  }

  getTasks() {
    return this.taskRepository.find();
  }

  async getTask(id: number) {
    const taskFound = await this.taskRepository.findOne({
      where: { id },
    });

    if (!taskFound) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return taskFound;
  }

  async deleteTask(id: number) {
    const result = await this.taskRepository.delete({ id });

    if (result.affected === 0) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async updateTask(id: number, task: UpdateTaskDto) {
    const taskFound = await this.taskRepository.findOne({
      where: { id },
    });

    if (!taskFound) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    const updateTask = Object.assign(taskFound, task);
    return this.taskRepository.save(updateTask);
  }
}
