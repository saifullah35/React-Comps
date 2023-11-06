import Link from "./Link";

function Sidebar() {
    // Array of objects that are going to represent each individual link
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
    ];

    const renderedLinks = links.map((link) => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    });

    return (
        <div classname="sticky top-0 overflow-y-scroll flex flex-col">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;