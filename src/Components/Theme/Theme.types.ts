import { Color } from '../../Commons/Color/Color.config';

interface Theme {
    primary : Color;
    secondary: Color;
    primaryBackground: Color;
    secondaryBackground: Color;
}

type ThemeType = string;

export { Color, Theme, ThemeType };