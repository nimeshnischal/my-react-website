import React, { useState, createContext, SetStateAction, Dispatch, useContext } from 'react';
import { ThemeType, Theme } from './Theme.types';
import { THEMES } from './Theme.config';
import PropsWithChildren from '../../Commons/PropsWithChildren';

interface ThemeContextProps {
    themeType: ThemeType,
    theme: Theme,
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>> | null,
}


const ThemeContext = createContext<ThemeContextProps>({
    themeType: "light",
    theme: THEMES.light,
    setCurrentTheme: null,
});


const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [theme, setCurrentTheme] = useState<ThemeType>("light");

    return (
        <ThemeContext.Provider value={{
            themeType: theme,
            theme: THEMES[theme],
            setCurrentTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;