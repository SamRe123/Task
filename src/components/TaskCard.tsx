import { Circle, Clock, CheckCircle, Trash2 } from "lucide-react";
import type { CATEGORY, PRIO, STATUS, Task } from "../types";

const TaskCard: React.FC<{
    task: Task;
    onStatusChange: (id: string, status: STATUS) => void;
    onDelete: (id: string) => void;
}> = ({ task, onStatusChange, onDelete }) => {
    const getStatusIcon = (status: STATUS) => {
        switch (status) {
            case "todo":
                return <Circle className="w-5 h-5 text-gray-400" />;
            case "in-progress":
                return <Clock className="w-5 h-5 text-blue-500" />;
            case "done":
                return <CheckCircle className="w-5 h-5 text-green-500" />;
        }
    };

    const getPriorityColor = (priority: PRIO) => {
        switch (priority) {
            case "low":
                return "bg-green-100 text-green-800";
            case "medium":
                return "bg-yellow-100 text-yellow-800";
            case "high":
                return "bg-red-100 text-red-800";
        }
    };

    const getCategoryColor = (category: CATEGORY) => {
        switch (category) {
            case "work":
                return "bg-blue-100 text-blue-800";
            case "personal":
                return "bg-purple-100 text-purple-800";
            case "shopping":
                return "bg-orange-100 text-orange-800";
        }
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            const nextStatus = task.status === "todo" ? "in-progress" : task.status === "in-progress" ? "done" : "todo";
                            onStatusChange(task.id, nextStatus);
                        }}
                    >
                        {getStatusIcon(task.status)}
                    </button>
                    <h3 className={`font-medium ${task.status === "done" ? "line-through text-gray-500" : ""}`}>{task.title}</h3>
                </div>
                <button onClick={() => onDelete(task.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <p className="text-gray-600 text-sm mb-3">{task.description}</p>

            <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}>{task.category}</span>
                <span className="text-xs text-gray-400 ml-auto">{task.createdAt.toLocaleDateString()}</span>
            </div>
        </div>
    );
};

export { TaskCard };
