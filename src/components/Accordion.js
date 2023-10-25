import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
            <div key={item.id}>
            <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
            {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{renderedItems}</div>;
}

export default Accordion;


// The Accordion component is simple: just expands and collapses different section

// Anytime we change content on the screen, we need to use the STATE system
// What should State be called
// What type of data will my State be
// Which component should State be defined in