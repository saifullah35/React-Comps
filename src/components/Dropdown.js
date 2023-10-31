import { useState } from 'react';

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // Closes ndropdown: update the value of piece of state
        setIsOpen(false);
        // What option did user click on
        console.log(option);
    };

    const renderedOptions = options.map((option) => {
        return <div onClick={handleOptionClick}key={option.value}>{option.label}</div>
    });

    return (
        <div>
            <div onClick={() => handleClick}>Select...</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;

// Communicate some info from inside the mapping function to an event handler
// Whenevr user calls this arrow function () =>, we invoke hanldeOptionClick