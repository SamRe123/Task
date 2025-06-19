import type { Task } from "../types";

const initialTasks: Task[] = [
    {
        id: "1",
        title: "React-Dokumentation durchgehen",
        description: "Die neuesten Funktionen von React 18 durchgehen",
        status: "todo",
        priority: "high",
        category: "work",
        createdAt: new Date("2024-01-15"),
    },
    {
        id: "2",
        title: "Lebensmittel einkaufen",
        description: "Milch, Brot, Eier und Gemüse",
        status: "in-progress",
        priority: "medium",
        category: "shopping",
        createdAt: new Date("2024-01-14"),
    },
    {
        id: "3",
        title: "Zahnarzt anrufen",
        description: "Termin für nächste Woche vereinbaren",
        status: "done",
        priority: "high",
        category: "personal",
        createdAt: new Date("2024-01-13"),
    },
    {
        id: "4",
        title: "Projektvorschlag fertigstellen",
        description: "Dokument für den Q1-Projektvorschlag abschließen",
        status: "in-progress",
        priority: "high",
        category: "work",
        createdAt: new Date("2024-01-12"),
    },
    {
        id: "5",
        title: "Wohnung putzen",
        description: "Wöchentliche Reinigungsroutine",
        status: "todo",
        priority: "low",
        category: "personal",
        createdAt: new Date("2024-01-11"),
    },
];

export { initialTasks };
