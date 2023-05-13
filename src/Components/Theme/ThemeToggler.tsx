import React from 'react';
import { useTheme } from './ThemeContext';
import { ThemeType } from './Theme.types';
import { THEMES } from './Theme.config';

export default function ThemeToggler() {
    const { theme, themeType, setCurrentTheme } = useTheme();
    const { secondary, background } = theme;

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentTheme && setCurrentTheme(e.target.value as ThemeType);
    };

    return (
        <select
            onChange={onChange}
            style={{ color: secondary, backgroundColor: background }}
        >
            {
                Object.keys(THEMES).map((key) => {
                    return (
                        <option
                            key={key}
                            value={key}
                            selected={key === themeType}
                        >
                            {key}
                        </option>
                    );
                })
            }
        </select>
    );
}
