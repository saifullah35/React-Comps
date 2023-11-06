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

    return (
            <NavigationContext.Provider value={{}}>
                {currentPath}
                {children}
            </NavigationContext.Provider>
        );
}

export { NavigationProvider };
export default NavigationContext;