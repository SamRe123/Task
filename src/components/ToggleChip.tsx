interface ToggleChipProps<T extends string> {
    label: T;
    isSelected: boolean;
    onToggle: (label: T) => void;
}

const ToggleChip = <T extends string>({ label, isSelected, onToggle }: ToggleChipProps<T>) => {
    return (
        <button
            onClick={() => onToggle(label)}
            className={`
            px-4 py-2 rounded-full text-sm font-medium min-w-[110px]
            transition-all duration-200 ease-in-out
        ${isSelected ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-300"}
        focus:outline-none 
      `}
        >
            {label}
        </button>
    );
};

export default ToggleChip;
