import { Color } from '../../Commons/Color/Color.config';
import { Theme, ThemeType } from './Theme.types';

const THEMES : Record<ThemeType, Theme> = {
    plain_dark: {
        primary: Color.WHITE,
        secondary: Color.LIGHT_GREY,
        primaryBackground: Color.BLACK,
        secondaryBackground: Color.DARK_GREY,
    },
    plain_light: {
        primary: Color.BLACK,
        secondary: Color.DARK_GREY,
        primaryBackground: Color.IVORY,
        secondaryBackground: Color.LIGHT_GREY,
    },
    jungle: {
        primary: Color.TANGERINE_YELLOW,
        secondary: Color.IVORY,
        primaryBackground: Color.BLACK,
        secondaryBackground: Color.GREEN,
    },
    neon: {
        primary: Color.MALACHITE_GREEN,
        secondary: Color.WHITE,
        primaryBackground: Color.RAZZMATAZZ,
        secondaryBackground: Color.HELIOTROPE,
    },
    neon_dim: {
        primary: Color.YELLOW_GREEN,
        secondary: Color.LIGHT_GREY,
        primaryBackground: Color.DIM_GREY,
        secondaryBackground: Color.LIGHT_GREY,
    },
};

export { THEMES };
