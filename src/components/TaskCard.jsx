
import { CalendarDays, MoreHorizontal } from "lucide-react";

const TaskCard = ({ task , tasks , setTasks }) => {

  const handleStatusChange = (e)=>{
    const newStatus = e.target.value
    const updatedStatus = tasks.map((item)=> item.id === task.id ? {...item , status: newStatus} : item)
    setTasks(updatedStatus)
  }

  const priorityColors = {
    High: "bg-rose-500/10 text-rose-300",
    Medium: "bg-amber-500/10 text-amber-300",
    Low: "bg-emerald-500/10 text-emerald-300",
  };

  return (
    <article className="rounded-xl border border-white/[0.07] bg-[#171820] p-4 transition hover:border-indigo-400/30">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
          Task #{task.id}
        </span>
        <MoreHorizontal size={17} className="text-gray-500" />
      </div>

      <h3 className="text-sm font-semibold leading-6 text-gray-100">
        {task.title}
      </h3>

      <div className="mt-3">
  <select
      value={task.status}
      onChange={handleStatusChange}
      className="w-full rounded-lg border border-white/10 bg-[#20212b] px-3 py-2 text-xs text-gray-300 outline-none focus:border-indigo-400"
    >
      <option value="todo">To Do</option>
      <option value="progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span
          className={`rounded-md px-2 py-1 text-[10px] font-semibold ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </span>

        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <CalendarDays size={13} />
          {task.dueDate}
        </span>
      </div>
    </article>
  );
};

export default TaskCard;
