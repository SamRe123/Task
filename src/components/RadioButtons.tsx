import type { CATEGORY } from "../types";

interface RadioButtonProps {
    label: CATEGORY;
    onCheck: (label: CATEGORY) => void;
    isSelected: boolean;
}

const RadioButton = ({ onCheck, isSelected, label }: RadioButtonProps) => {
    return (
        <label className="flex items-center justify-start gap-x-3   cursor-pointer p-2 rounded-lg hover:bg-gray-300  w-[100px]">
            <input
                type="radio"
                name="programming-language"
                checked={isSelected}
                onChange={() => onCheck(label)}
                className="w-4 text-blue-500 bg-gray-100 border-gray-300  "
            />
            <span className="text-gray-700 font-medium">{label}</span>
        </label>
    );
};

export default RadioButton;
