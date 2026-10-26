
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Settings,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    
<aside className="flex w-52 shrink-0 flex-col border-r border-white/[0.07] bg-[#111218] p-4 max-md:w-16 max-md:px-3 max-sm:hidden">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-white">
          <Zap size={19} />
        </div>

        <span className="text-lg font-bold text-white max-md:hidden">
          Taskflow
        </span>
      </div>

      <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-widest text-gray-600 max-md:hidden">
        Workspace
      </p>

      <nav className="space-y-2">

        <button onClick={()=>navigate("/my-tasks")} className="flex cursor-pointer w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-500 transition hover:bg-white/5 hover:text-white">
          <CheckSquare size={18} />
          <span className="max-md:hidden">My Tasks</span>
        </button>

        <button onClick={()=>navigate("/addTask")} className="flex cursor-pointer w-full items-center gap-3 rounded-xl bg-indigo-500/15 px-3 py-3 text-left text-sm text-indigo-300">
          <CalendarDays size={18} />
          <span className="max-md:hidden">My Board</span>
        </button>

      </nav>

      <div className="mt-auto border-t border-white/[0.07] pt-5">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-500 transition hover:bg-white/5 hover:text-white">
          <Settings size={18} />
          <span className="max-md:hidden">Settings</span>
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;
