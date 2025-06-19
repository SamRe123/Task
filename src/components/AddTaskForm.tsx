import { Plus } from "lucide-react";
import { useState } from "react";
import type { CATEGORY, PRIO, STATUS, Task } from "../types";

const AddTaskForm: React.FC<{
    onAddTask: (task: Omit<Task, "id" | "createdAt">) => void;
}> = ({ onAddTask }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "todo" as STATUS,
        priority: "medium" as PRIO,
        category: "work" as CATEGORY,
    });

    const handleSubmit = () => {
        if (formData.title.trim()) {
            onAddTask(formData);
            setFormData({
                title: "",
                description: "",
                status: "todo",
                priority: "medium",
                category: "work",
            });
            setIsOpen(false);
        }
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="w-full bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-4 text-blue-600 hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Neuen Task hinzufügen
            </button>
        );
    }

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Titel..."
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoFocus
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    />
                </div>

                <div>
                    <textarea
                        placeholder="Beschreibung..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        rows={2}
                    />
                </div>

                <div className="flex gap-4">
                    <select
                        value={formData.priority}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                priority: e.target.value as PRIO,
                            })
                        }
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="low">Niedrige Priorität</option>
                        <option value="medium">Normale Priorität</option>
                        <option value="high">Hohe Priorität</option>
                    </select>

                    <select
                        value={formData.category}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                category: e.target.value as CATEGORY,
                            })
                        }
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="work">Arbeit</option>
                        <option value="personal">Privat</option>
                        <option value="shopping">Einkaufen</option>
                    </select>
                </div>

                <div className="flex gap-2">
                    <button type="button" onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Neuen Task hinzufügen
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                        Abbrechen
                    </button>
                </div>
            </div>
        </div>
    );
};

export { AddTaskForm };
