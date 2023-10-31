import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // Closes ndropdown: update the value of piece of state
        setIsOpen(false);
        // What option did user click on
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className= "hover:bg-sky-100 rounded cursor-pointer p-1"onClick={() => handleOptionClick} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div className="w-48 relative">
            <div 
                className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" 
                onClick={handleClick}
            >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </div>
            {isOpen && (
            <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
                {renderedOptions}
            </div>
            )};
        </div>
    );
}

export default Dropdown;

// Communicate some info from inside the mapping function to an event handler
// Whenevr user calls this arrow function () =>, we invoke hanldeOptionClick