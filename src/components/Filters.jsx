
import { SlidersHorizontal } from "lucide-react";

const Filters = ({category, setCategory, priority, setPriority, status, setStatus}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <SlidersHorizontal size={16} className="text-gray-400" />

      <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
      className="rounded-xl border border-white/10 bg-[#15161d] px-3 py-3 text-sm text-gray-300 outline-none"
    >
      <option value="">All Categories</option>
      <option value="DSA">DSA</option>
      <option value="Technical Interview">Technica Interview</option>
      <option value="Git & GitHub">Git & GitHub</option>
      <option value="Development">Development</option>
    </select>

      <select   value={priority}
                onChange={(e) => setPriority(e.target.value)} className="rounded-xl border border-white/10 bg-[#15161d] px-3 py-3 text-sm text-gray-300 outline-none">
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select value={status} onChange={(e)=>setStatus(e.target.value)} className="rounded-xl border border-white/10 bg-[#15161d] px-3 py-3 text-sm text-gray-300 outline-none">
        <option value="">All Status</option>
        <option value="todo">To Do</option>
        <option value="progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default Filters;
