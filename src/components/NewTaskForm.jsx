
import { ArrowLeft, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const NewTask = ({tasks,setTasks}) => {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("Technical");
const [priority, setPriority] = useState("Medium");
const [dueDate, setDueDate] = useState("");
const [status, setStatus] = useState("todo");
const navigate = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
        toast.error("Title is required!")
        return;
    }

    const newTask = {
        id: Date.now(),
        title,
        description,
        category,
        priority,
        dueDate,
        status,
    };

    setTasks([...tasks, newTask]);

    navigate("/my-tasks");
};


  return (
    <div className="min-h-screen bg-[#0c0d12] p-5 text-white md:p-10">
      <div className="mx-auto max-w-2xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-[#15161d] px-4 py-2.5 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Create New Task</h1>
          <p className="mt-2 text-sm text-gray-400">
            Add a task to your interview preparation board.
          </p>
        </div>

        {/* Task Form */}
        <form className="space-y-6 rounded-2xl border border-white/10 bg-[#15161d] p-6 md:p-8">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Task Title
            </label>
            <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              type="text"
              placeholder="e.g. Practice binary search"
              className="w-full rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3 text-sm outline-none transition focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              rows="4"
              placeholder="Describe your task..."
              className="w-full resize-none rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3 text-sm outline-none transition focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Category
              </label>
              <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3 text-sm outline-none focus:border-indigo-500">
                <option>DSA</option>
                <option>Technical Interview</option>
                <option>Git & GitHub</option>
                <option>Development</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Priority
              </label>
              <select value={priority} onChange={(e)=>setPriority(e.target.value)} className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3 text-sm outline-none focus:border-indigo-500">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Due Date
              </label>
              <input
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    type="date"
                    className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3 text-sm text-white outline-none focus:border-indigo-500 [color-scheme:dark]"
                    />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Status
              </label>
              <select value={status} onChange={(e)=>setStatus(e.target.value)} className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3 text-sm outline-none focus:border-indigo-500">
                <option value="todo">To Do</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="cursor-pointer rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/5"
            >
              Cancel
            </button>

            <button
            onClick={handleSubmit}
              type="button"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium transition hover:bg-indigo-500"
            >
              <Plus size={17} />
              Create Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default NewTask;
