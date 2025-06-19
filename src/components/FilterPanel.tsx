import { Filter, StepBack, X } from "lucide-react";
import SearchBar from "./SearchBar";
import ToggleChip from "./ToggleChip";
import { ALL_CATEGORIES, ALL_PRIOS, ALL_STATUSES, type CATEGORY, type FilterState, type PRIO, type STATUS } from "../types";
import RadioButton from "./RadioButtons";
import { memo, useState } from "react";

interface FilterPanelProps {
    filters: FilterState;
    handleSearchInput: (value: string) => void;
    handleStatusChange: (status: STATUS) => void;
    handlePriorityChange: (priority: PRIO) => void;
    handleCategoryChange: (category: CATEGORY) => void;
    resetFilter: () => void;
}

const FilterPanel = ({ filters, handleSearchInput, handleStatusChange, handlePriorityChange, handleCategoryChange, resetFilter }: FilterPanelProps) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="flex gap-4 text-gray-400 text-sm mb-8 ">
            <SearchBar searchTerm={filters.search} changeSearchTerm={handleSearchInput} />
            <div className=" relative">
                <button
                    onClick={() => setOpen(!isOpen)}
                    className={`flex bg-white items-center p-3 min-w-[200px] rounded-lg  gap-x-4 border border-gray-300 hover:ring-2 hover:ring-blue-500 hover:cursor-pointer   ${
                        isOpen ?? "ring-2 ring-blue-500"
                    } `}
                >
                    <Filter size={20} className={isOpen ? "text-blue-500" : ""} />
                    Filter
                </button>
                {isOpen && (
                    <div className="border border-gray-300 bg-white p-2 absolute top-15 min-w-[400px] grid grid-rows-[20px_1fr] text-center rounded-lg ">
                        <div className="w-full flex justify-end">
                            <button onClick={() => setOpen(!isOpen)} className="hover:text-red-500 hover:cursor-pointer  rounded-2xl">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-3">
                            <div>
                                <p className="font-semibold mb-2">STATUS</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {ALL_STATUSES.map((s) => (
                                        <ToggleChip key={s} label={s as STATUS} onToggle={handleStatusChange} isSelected={filters.status.includes(s)} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">PRIORITÄT</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {ALL_PRIOS.map((s) => (
                                        <ToggleChip key={s} label={s as PRIO} onToggle={handlePriorityChange} isSelected={filters.priority.includes(s)} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">STATUS</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {ALL_CATEGORIES.map((s) => (
                                        <RadioButton key={s} label={s as CATEGORY} onCheck={handleCategoryChange} isSelected={filters.category === s} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button
                onClick={resetFilter}
                className={`flex bg-white items-center p-3 min-w-[200px] rounded-lg  gap-x-4 border border-gray-300 hover:ring-2 hover:ring-blue-500 hover:cursor-pointer   ${
                    isOpen ?? "ring-2 ring-blue-500"
                } `}
            >
                <StepBack size={20} />
                Filter zurücksetzen
            </button>
        </div>
    );
};

export default memo(FilterPanel);
