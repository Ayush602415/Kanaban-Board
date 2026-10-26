
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const EditTask = ({ tasks, setTasks }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const task = tasks.find((task) => task.id === Number(id));

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [category, setCategory] = useState(task?.category || "Technical");
  const [priority, setPriority] = useState(task?.priority || "Medium");
  const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [status, setStatus] = useState(task?.status || "todo");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Title is required")
      return;
    }

    const updatedTasks = tasks.map((item) =>
      item.id === Number(id)
        ? {
            ...item,
            title,
            description,
            category,
            priority,
            dueDate,
            status,
          }
        : item
    );

    setTasks(updatedTasks);
    navigate("/my-tasks");
    toast.success("Question Updated Sucessfully!")
  };

  if (!task) {
    return (
      <div className="min-h-screen bg-[#0c0d12] p-8 text-white">
        <h1 className="text-xl font-semibold">Task not found</h1>
        <button
          onClick={() => navigate("/my-tasks")}
          className="mt-4 cursor-pointer text-indigo-400"
        >
          Back to My Tasks
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0d12] p-6 text-white md:p-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold">Edit Task</h1>
        <p className="mb-8 text-sm text-gray-400">
          Update your task details.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-[#15161d] p-6"
        >
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Task Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3 outline-none focus:border-indigo-500"
              placeholder="Enter task title"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3 outline-none focus:border-indigo-500"
              placeholder="Enter description"
              rows={4}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3"
            >
              <option value="DSA">DSA</option>
              <option value="Technical">Technical</option>
              <option value="Git">Git</option>
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3"
              >
                <option value="todo">To Do</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3 [color-scheme:dark]"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 cursor-pointer rounded-xl bg-indigo-500 px-4 py-3 font-medium hover:bg-indigo-600"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => navigate("/my-tasks")}
              className="cursor-pointer rounded-xl border border-white/10 px-5 py-3 text-gray-300 hover:bg-white/5"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
