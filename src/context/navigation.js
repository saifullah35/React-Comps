import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname); // currentPath piece of state to have a default value when it's first declared

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return (
            <NavigationContext.Provider value={{ currentPath, navigate}}>
                {children}
            </NavigationContext.Provider>
        );
}

export { NavigationProvider };
export default NavigationContext;

// Use a link component anytime a user is trying to go to a path inside of our app