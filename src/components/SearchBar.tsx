import { Search } from "lucide-react";
import { memo } from "react";

interface SearchProps {
    searchTerm: string;
    changeSearchTerm: (value: string) => void;
}

const SearchBar = ({ searchTerm, changeSearchTerm }: SearchProps) => {
    return (
        <div className="relative flex items-center">
            <input
                value={searchTerm}
                onChange={(e) => changeSearchTerm(e.target.value)}
                className="border border-gray-300 min-w-[250px] bg-white text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-3 w-full"
                placeholder={"Suche..."}
            />
            <Search className="absolute left-3 text-gray-400" size={20} />
        </div>
    );
};

export default memo(SearchBar);
