import React, { useState, createContext, useContext, useEffect } from 'react';
import throttle from 'lodash.throttle';
import { SCREEN_SIZES } from './ScreenSize.config';
import PropsWithChildren from '../../../Commons/PropsWithChildren';
import { ScreenType, ScreenSize } from './ScreenSize.types';

interface ScreenSizeContextProps {
    screenType: ScreenType,
    screenSize: ScreenSize,
}


const ScreenSizeContext = createContext<ScreenSizeContextProps>({
    screenType: ScreenType.md,
    screenSize: SCREEN_SIZES[ScreenType.md],
});

const getScreenType = (width: number) => {
    if (width < SCREEN_SIZES[ScreenType.xs].max) {
        return ScreenType.xs;
    } else if (width < SCREEN_SIZES[ScreenType.sm].max) {
        return ScreenType.sm;
    } else if (width < SCREEN_SIZES[ScreenType.md].max) {
        return ScreenType.md;
    } else if (width < SCREEN_SIZES[ScreenType.lg].max) {
        return ScreenType.lg;
    } else if (width < SCREEN_SIZES[ScreenType.xl].max) {
        return ScreenType.xl;
    } else {
        return ScreenType.xxl;
    }
}


const ScreenSizeProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [screenSize, setCurrentScreenSize] = useState<ScreenType>(ScreenType.md);

    useEffect(() => {
        const calcInnerWidth = throttle(function () {
            setCurrentScreenSize(getScreenType(window.innerWidth))
        }, 500);
        calcInnerWidth();
        window.addEventListener('resize', calcInnerWidth)
        return () => window.removeEventListener('resize', calcInnerWidth)
    }, []);

    return (
        <ScreenSizeContext.Provider value={{
            screenType: screenSize,
            screenSize: SCREEN_SIZES[screenSize],
        }}>
            {children}
        </ScreenSizeContext.Provider>
    );
};


export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;