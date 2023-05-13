import { Color } from '../../Commons/Color/Color.config';
import { Theme, ThemeType } from './Theme.types';

const THEMES : Record<ThemeType, Theme> = {
    dark: {
        primary: Color.BRIGHT_BLUE,
        secondary: Color.LIGHT_GRAY,
        background: Color.DARK_BLUE,
    },
    light: {
        primary: Color.DARK_BLUE,
        secondary: Color.BRIGHT_BLUE,
        background: Color.LIGHT_GRAY,
    },
};

export { THEMES };
