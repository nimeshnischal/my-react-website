import React, { createContext, useReducer, useState } from 'react';

const ThemeColors = {
    light: {
        primary: '#000',
        secondary: '#eee',
        name: 'Light',
    },
    dark: {
        primary: '#fff',
        secondary: '#222',
        name: 'Dark',
    },
    bluePeach: {
        primary: '#EEA47FFF',
        secondary: '#00539CFF',
        name: 'Bluey',
    },
    blackNYellow: {
        primary: '#FEE715FF',
        secondary: '#101820FF',
        name: 'Black n Yellow',
    },
};

const ThemeColorContext = createContext();

const initialState = ThemeColors.light;

const themeColorReducer = (state, action) => {
    switch (action.type) {
        case 'light':
            return ThemeColors.light;
        case 'dark':
            return ThemeColors.dark;
        case 'bluePeach':
            return ThemeColors.bluePeach;
        case 'blackNYellow':
            return ThemeColors.blackNYellow;
        default:
            return state;
    }
};

const ThemeColorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeColorReducer, initialState);

    return (
        <ThemeColorContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeColorContext.Provider>
    );
}

export { ThemeColors, ThemeColorContext, ThemeColorProvider };