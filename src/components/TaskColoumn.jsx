
import { Plus } from "lucide-react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks, color, allTasks, setTasks }) => {
  return (
    <section className="min-w-0">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
          <h2 className="text-sm font-semibold text-gray-200">
            {title}
          </h2>
          <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-xs text-gray-500">
            {tasks.length}
          </span>
        </div>
        <Plus size={17} className="text-gray-500" />
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
            <TaskCard
                key={task.id}
                task={task}
                tasks={allTasks}
                setTasks={setTasks}
                />
        ))}

        <div className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/[0.1] py-3 text-xs text-gray-500">
          <Plus size={15} />
          Add task
        </div>
      </div>
    </section>
  );
};

export default TaskColumn;
