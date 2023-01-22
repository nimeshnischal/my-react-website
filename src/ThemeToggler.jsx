import React from 'react';

import { ThemeColors, ThemeColorContext } from './ThemeContext';

export default function ThemeToggler() {
    const theme = React.useContext(ThemeColorContext);
    const { primary, secondary } = theme.state;

    const onChange = (e) => {
        theme.dispatch({ type: e.target.value });
    };

    return (
        <select
            onChange={onChange}
           style={{ color: primary, backgroundColor: secondary }}
        >
            {
                Object.keys(ThemeColors).map((key) => {
                    return (
                        <option
                            key={key}
                            value={key}
                        >
                            {ThemeColors[key].name}
                        </option>
                    );
                })
            }
        </select>
    );
}
