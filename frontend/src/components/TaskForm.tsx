import { ChangeEvent, FormEvent, useState } from "react";
import { useTasks } from "../context/useTasks";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: false,
  });
  const { createTask } = useTasks();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if title is empty
    if (!task.title.trim()) {
      alert("Task cannot be empty");
      return;
    }

    // Continue with task creation
    await createTask(task);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
      <input
        name="title"
        type="text"
        placeholder="Add a task"
        onChange={handleChange}
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full mt-5 mb-2"
      />

      <textarea
        name="description"
        rows={3}
        onChange={handleChange}
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full mb-2"
        placeholder="Write a description"
      ></textarea>

      <label className="hidden">
        <input
          type="checkbox"
          value={task.status ? 1 : 0}
          onChange={() =>
            setTask({
              ...task,
              status: !task.status,
            })
          }
          className="hidden"
        />
      </label>

      <button type="submit" className="bg-lime-900 rounded-sm px-3 block py-2 w-20 mb-5 hover:bg-lime-800 hover:cursor-pointer">
        Save
      </button>
    </form>
  );
}

export default TaskForm;
