import { ScreenSize, ScreenType } from './ScreenSize.types';

const SCREEN_SIZES : Record<ScreenType, ScreenSize> = {
    [ScreenType.xs]: {
        min: 0,
        max: 319,
    },
    [ScreenType.sm]: {
        min: 320,
        max: 719,
    },
    [ScreenType.md]: {
        min: 720,
        max: 1023,
    },
    [ScreenType.lg]: {
        min: 1024,
        max: 1439,
    },
    [ScreenType.xl]: {
        min: 1440,
        max: 1919,
    },
    [ScreenType.xxl]: {
        min: 1920,
        max: 10000,
    },
};

export { SCREEN_SIZES };
