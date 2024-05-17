import { createContext, useRef, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
    const [themeMode, setThemeMode] = useState('');


    return (
        <AppContext.Provider
         value={{ 
            themeMode, 
            setThemeMode
            
            }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };
export default AppContextProvider;
