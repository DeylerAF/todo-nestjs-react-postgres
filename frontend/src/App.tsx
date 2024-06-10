import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex justify-center items-center">
      <div className="bg-zinc-700 rounded-lg p-4 w-1/2">
        <h1 className="text-3xl font-bold text-center block my-2">To Do App</h1>
        <TaskProvider>
          <TaskForm />
          <TasksList />
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;
