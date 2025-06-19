import React, { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import FilterPanel from "./components/FilterPanel";
import { TaskCard } from "./components/TaskCard";
import { initialTasks } from "./data";
import useFilters from "./hooks/useFilters";
import type { STATUS, Task } from "./types";

const TaskApp: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const { filters, handleCategoryChange, handlePriorityChange, handleSearchInput, handleStatusChange, filteredData, resetFilter } = useFilters(tasks);

    const addTask = (taskData: Omit<Task, "id" | "createdAt">) => {
        const newTask: Task = {
            ...taskData,
            id: Date.now().toString(),
            createdAt: new Date(),
        };
        setTasks([newTask, ...tasks]);
    };

    const updateTaskStatus = (id: string, status: STATUS) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)));
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const getTaskCounts = () => {
        return {
            total: tasks.length,
            todo: tasks.filter((t) => t.status === "todo").length,
            inProgress: tasks.filter((t) => t.status === "in-progress").length,
            done: tasks.filter((t) => t.status === "done").length,
        };
    };

    const counts = getTaskCounts();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Manager</h1>
                    <div className="flex gap-4 text-sm text-gray-600">
                        <span>Total: {counts.total}</span>
                        <span>Todo: {counts.todo}</span>
                        <span>In Progress: {counts.inProgress}</span>
                        <span>Fertig: {counts.done}</span>
                    </div>
                </div>

                {/* TODO: Filter Panel hier */}
                <FilterPanel
                    filters={filters}
                    handleCategoryChange={handleCategoryChange}
                    handlePriorityChange={handlePriorityChange}
                    handleStatusChange={handleStatusChange}
                    handleSearchInput={handleSearchInput}
                    resetFilter={resetFilter}
                />

                <div className="mb-6">
                    <AddTaskForm onAddTask={addTask} />
                </div>

                <div className="space-y-4">
                    {filteredData.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            <p>Keine Tasks vorhanden</p>
                        </div>
                    ) : (
                        filteredData.map((task) => <TaskCard key={task.id} task={task} onStatusChange={updateTaskStatus} onDelete={deleteTask} />)
                    )}
                </div>
            </div>
        </div>
    );
};

export { TaskApp };
