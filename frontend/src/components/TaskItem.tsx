import { useTasks } from "../context/useTasks";
import { Task } from "../interface/task.interface";
import { IoCheckbox, IoSquareOutline, IoTrash } from "react-icons/io5";

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTasks();

  return (
    <div className="bg-zinc-900 p-2 my-2 rounded-lg flex justify-between hover:bg-zinc-800 hover:cursor-pointer">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-slate-400">{task.description}</p>
      </div>
      <div className="flex gap-x-2">
        <button onClick={() => updateTask(task.id, { status: !task.status })}>
          {task.status ? (
            <IoCheckbox className="text-green-500" />
          ) : (
            <IoSquareOutline className="hover:text-gray-500" />
          )}
        </button>
        <button
          onClick={() => {
            if (!window.confirm("Are you sure you want to delete it?")) return;
            deleteTask(task.id);
          }}
        >
          <IoTrash className="hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
