import { Color } from '../../Commons/Color/Color.config';

interface Theme {
    primary : Color;
    secondary: Color;
    background: Color;
}

type ThemeType = string;

export { Color, Theme, ThemeType };