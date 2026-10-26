import { Plus, Search } from "lucide-react";
import Filters from "./Filters";
import { useNavigate } from "react-router";


const BoardHeader = ({search,
  setSearch,
  category,
  setCategory,
  priority,
  setPriority,
  status,
  setStatus }) => {
    const navigate = useNavigate()
  return (
    <div className="mb-8 flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">My Board</h1>
          <p className="mt-1 text-sm text-gray-400">
            Keep your work organized.
          </p>
        </div>

        <button
          onClick={()=>navigate("/addTask")}
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-500"
        >
          <Plus size={18} />
          New Task
        </button>
      </div>

     
<div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#15161d] px-4 py-3">
          <Search size={18} className="text-gray-500" />
          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search tasks..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          />
        </div>

        <Filters   category={category}
                  setCategory={setCategory}
                  priority={priority}
                  setPriority={setPriority}
                  status={status}
                  setStatus={setStatus} />
          </div>
    </div>
  );
};

export default BoardHeader;