type STATUS = "todo" | "in-progress" | "done";
type PRIO = "low" | "medium" | "high";
type CATEGORY = "all" | "work" | "personal" | "shopping";

interface Task {
    id: string;
    title: string;
    description: string;
    status: STATUS;
    priority: PRIO;
    category: CATEGORY;
    createdAt: Date;
}

interface FilterState {
    search: string;
    status: STATUS[];
    priority: PRIO[];
    category: CATEGORY;
}

export const ALL_STATUSES = ["todo", "in-progress", "done"] as const;
export const ALL_PRIOS = ["low", "medium", "high"] as const;
export const ALL_CATEGORIES = ["work", "personal", "shopping"] as const;

export { type Task, type FilterState, type STATUS, type PRIO, type CATEGORY };
