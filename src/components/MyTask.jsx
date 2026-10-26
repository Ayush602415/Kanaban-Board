import { ArrowLeft, ClipboardList, Trash2, Pencil } from "lucide-react";
import { useNavigate } from "react-router";

const MyTask = ({tasks , setTasks}) => {
    const handleDelete = (id)=>{
        const updatedTask = tasks.filter((task)=>task.id !== id)
        setTasks(updatedTask)
    }
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#0c0d12] p-6 text-white md:p-10">
        <div className="mb-10">
              <button
              type="button"
              onClick={() => navigate("/")}
              className="flex gap-2 cursor-pointer rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/5"
            >
                <ArrowLeft size={20}  />
              Back To Dashboard
            </button>
        </div>
      {tasks.length === 0 ? (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#15161d] p-8 text-center">
    <div className="mb-4 rounded-2xl bg-indigo-500/10 p-4">
      <ClipboardList size={32} className="text-indigo-400" />
    </div>

    <h2 className="text-lg font-semibold">No Tasks Yet</h2>

    <p className="mt-2 max-w-sm text-sm text-gray-400">
      Create your first task to start organizing your work.
    </p>

    <button
      onClick={() => navigate("/addTask")}
      className="mt-5 cursor-pointer rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-medium hover:bg-indigo-600"
    >
      + Create Task
    </button>
  </div>
) : (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {tasks.map((task) => (
      <div
        key={task.id}
        className="rounded-2xl border border-white/10 bg-[#15161d] p-5"
      >
        <h2 className="text-lg font-semibold">{task.title}</h2>

        <p className="mt-2 text-sm text-gray-400">
          {task.description || "No description"}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-lg bg-indigo-500/10 px-3 py-1.5 text-indigo-300">
            {task.category}
          </span>

          <span className="rounded-lg bg-white/5 px-3 py-1.5 text-gray-300">
            {task.priority}
          </span>

          <span className="rounded-lg bg-white/5 px-3 py-1.5 text-gray-300">
            {task.status}
          </span>
          <button
            onClick={() => navigate(`/editTask/${task.id}`)}
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2.5 text-sm text-indigo-400 transition hover:bg-indigo-500/20"
            >
            <Pencil size={16} />
            Edit Task
            </button>
          <button
            onClick={() => handleDelete(task.id)}
            className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-400 transition hover:bg-red-500/20"
            >
            <Trash2 size={16} />
            Delete Task
            </button>
        </div>
      </div>
    ))}
  </div>
)}
    </div>
  );
};

export default MyTask;
