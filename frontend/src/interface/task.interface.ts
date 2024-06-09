export interface Task {
  id: string;
  title: string;
  description?: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateTask = Omit<Task, "id" | "createdAt" | "updatedAt">;

export type UpdateTask = Partial<CreateTask>;
