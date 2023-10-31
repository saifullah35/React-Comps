import { useState, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handler = (event) => {
            console.log(event.target);
        };

        document.addEventListener('click',handler, true);
    }, []);

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
            <Panel
                className="flex justify-between items-center cursor-pointer" 
                onClick={handleClick}
            >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && (
            <Panel className="absolute top-full">
                {renderedOptions}
            </Panel>
            )};
        </div>
    );
}

export default Dropdown;

// Communicate some info from inside the mapping function to an event handler
// Whenevr user calls this arrow function () =>, we invoke hanldeOptionClick