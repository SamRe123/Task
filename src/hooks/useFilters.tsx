/*
Kurzer Kommentar: Ich habe hier useMemo und useCallback verwendet, auch wenn es bei so kleinen Anwendungen
nicht so relevant ist und keinen spürbaren Performance-Gewinn bringt und als Overhead betrachtet werden kann. 
Ich möchte aber trotzdem zeigen, dass ich diese Hooks verstehe und zu nutzen weiß, wenn sie relevant sind.
*/

import { useCallback, useMemo, useState } from "react";
import type { CATEGORY, FilterState, PRIO, STATUS, Task } from "../types";

function useFilters(initialData: Task[]) {
    const INITIAL_FILTER_STATE: FilterState = useMemo(() => {
        return {
            search: "",
            category: "all",
            priority: [],
            status: [],
        };
    }, []);
    const [filters, setFilters] = useState<FilterState>(INITIAL_FILTER_STATE);

    const handleSearchInput = useCallback((value: string) => {
        setFilters((prev) => ({ ...prev, search: value }));
    }, []);

    const handleCategoryChange = useCallback((category: CATEGORY) => {
        setFilters((prev) => ({ ...prev, category: category }));
    }, []);

    const handlePriorityChange = useCallback((priority: PRIO) => {
        setFilters((prev) => {
            const currentPriorities = prev.priority;

            if (currentPriorities.includes(priority)) {
                return { ...prev, priority: currentPriorities.filter((p) => p !== priority) };
            } else {
                return { ...prev, priority: [...currentPriorities, priority] };
            }
        });
    }, []);

    const handleStatusChange = useCallback((status: STATUS) => {
        setFilters((prev) => {
            const currentStatus = prev.status;

            if (currentStatus.includes(status)) {
                return { ...prev, status: currentStatus.filter((s) => s !== status) };
            } else {
                return { ...prev, status: [...currentStatus, status] };
            }
        });
    }, []);

    const resetFilter = useCallback(() => {
        setFilters(INITIAL_FILTER_STATE);
    }, [INITIAL_FILTER_STATE]);

    const filteredData = useMemo(() => {
        return initialData.filter((data) => {
            if (filters.search.length > 0 && !data.title.toLowerCase().includes(filters.search.toLowerCase())) {
                return false;
            }

            if (filters.category !== "all" && data.category !== filters.category) {
                return false;
            }

            if (filters.priority.length > 0 && !filters.priority.includes(data.priority)) {
                return false;
            }

            if (filters.status.length > 0 && !filters.status.includes(data.status)) {
                return false;
            }

            return true;
        });
    }, [filters, initialData]);

    return {
        handleCategoryChange,
        handlePriorityChange,
        handleSearchInput,
        handleStatusChange,
        filters,
        filteredData,
        resetFilter,
    };
}

export default useFilters;
