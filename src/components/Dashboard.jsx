
import {
  Target,
  CheckCircle2,
  Clock3,
  ListTodo,
  Code2,
  GitBranch,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

import BoardHeader from "../components/BoardHeader";
import Sidebar from "../components/Sidebar";
import TaskColumn from "../components/TaskColoumn";
import { useState } from "react";
const Dashboard = ({tasks , setTasks}) => {

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const filteredTasks = tasks.filter((task)=>{
    const searchText = search.toLowerCase()
    const matchesSearch =   task.title?.toLowerCase().includes(searchText) ||  task.description?.toLowerCase().includes(searchText)

    const matchCategory =  !category || task.category === category
    const matchPriority = !priority || task.priority === priority
    const matchStatus = !status || task.status === status
    return (
     matchCategory && matchPriority && matchStatus && matchesSearch
    )
  })

  const todoTasks = filteredTasks.filter(
    (task) => task.status === "todo"
  );

  const progressTasks = filteredTasks.filter(
    (task) => task.status === "progress"
  );

  const completedTasks = filteredTasks.filter(
    (task) => task.status === "completed"
  );


  const stats = [
    {
      title: "Total Tasks",
      value: tasks.length,
      icon: ListTodo,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      title: "In Progress",
      value: progressTasks.length,
      icon: Clock3,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      title: "Completed",
      value: completedTasks.length,
      icon: CheckCircle2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
  ];

  const prepAreas = [
    {
      title: "Data Structures & Algorithms",
      subtitle: "Practice coding problems",
      icon: Code2,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Technical Interview",
      subtitle: "Revise core CS concepts",
      icon: BookOpen,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
    {
      title: "Git & GitHub",
      subtitle: "Strengthen workflow knowledge",
      icon: GitBranch,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0c0d12] text-white lg:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-5 md:p-8">
        <BoardHeader
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        priority={priority}
        setPriority={setPriority}
        status={status}
        setStatus={setStatus}
/>

        {/* Welcome section */}
        <section className="relative mb-8 overflow-hidden rounded-2xl border border-indigo-400/15 bg-gradient-to-r from-indigo-950/70 to-[#171522] p-6 md:p-8">
          <div className="relative z-10 max-w-xl">
            <p className="mb-3 flex items-center gap-2 text-sm text-indigo-300">
              <Target size={16} />
              INTERVIEW PREPARATION
            </p>

            <h1 className="text-2xl font-bold md:text-3xl">
              Build skills. Stay consistent.
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Organize your tasks, practice DSA, and prepare
              for your next technical interview — one step at a time.
            </p>
          </div>

          <Target
            size={140}
            className="absolute -right-5 -bottom-8 text-indigo-400/10"
          />
        </section>

        {/* Overview stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-white/10 bg-[#15161d] p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    {stat.title}
                  </p>

                  <div className={`rounded-xl p-2 ${stat.bg}`}>
                    <Icon size={19} className={stat.color} />
                  </div>
                </div>

                <p className="mt-4 text-3xl font-bold">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </section>

        {/* Interview preparation */}
        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">
              Interview Prep
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Your main preparation areas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {prepAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#15161d] p-4 transition hover:border-indigo-400/30"
                >
                  <div className={`rounded-xl p-3 ${area.bg}`}>
                    <Icon size={22} className={area.color} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-gray-200">
                      {area.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {area.subtitle}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-gray-500"
                  />
                </div>
              );
            })}
          </div>
        </section>
        <section>
        <div className="mb-5">
            <h2 className="text-lg font-semibold">My Tasks</h2>
            <p className="mt-1 text-sm text-gray-500">
            Keep track of your daily progress
            </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <TaskColumn
            title="To Do"
            tasks={todoTasks}
            color="bg-yellow-400"
            allTasks={tasks}
            setTasks={setTasks}
            />

            <TaskColumn
            title="In Progress"
            tasks={progressTasks}
            color="bg-blue-400"
            allTasks={tasks}
            setTasks={setTasks}
            />

            <TaskColumn
            title="Completed"
            tasks={completedTasks}
            color="bg-green-400"
            allTasks={tasks}
            setTasks={setTasks}
            />
        </div>
    </section>
      </main>
    </div>
  );
};

export default Dashboard;
