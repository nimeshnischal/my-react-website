import React from "react";
import { useTheme } from "../Context/Theme/ThemeContext";
import { useScreenSize } from "../Context/ScreenSize/ScreenSizeContext";
import { ScreenType } from "../Context/ScreenSize/ScreenSize.types";

const navStyle = (background: string, primary: string, secondary: string) => ({
    backgroundColor: background,
    color: primary,
    padding: "0.5rem",
    display: "flex",
    justifyContent: "space-between",
});

const headerStyle = () => ({
    margin: '0.25rem 1rem',
});

const buttonContainerStyle = () => ({
    padding: "0.5rem",
});

const buttonStyle = (color: string) => ({
    backgroundColor: 'rgba(0,0,0,0)',
    margin: "0",
    color,
    padding: "0 1rem",
    border: 'none',
    fontSize: '1.2em',
});

const themeSelectorStyle = (primary: string, secondary: string) => ({
    ...buttonStyle(secondary),
    backgroundColor: primary,
    backgroundImage: 'radial-gradient(cyan 0%, transparent 20%, salmon 40%)',
    border: `2px solid ${secondary}`,
    borderRadius: "100%",
    height: "1.5rem",
    width: "1.5rem",
});

const NavButton = ({ label }: { label: string }) => {
    const { theme: { secondary } } = useTheme();

    return (
        <button style={buttonStyle(secondary)}>{label}</button>
    );
}

const SmallScreenNavBar = () => {
    const { theme: { secondaryBackground, primary, secondary } } = useTheme();

    return (
        <nav style={navStyle(secondaryBackground, primary, secondary)}>
            <h1 style={headerStyle()}>NavBar</h1>
            <div style={buttonContainerStyle()}>
                <button style={themeSelectorStyle(primary, secondary)}/>
                <NavButton label={'Home'}/>
                <NavButton label={'About'}/>
                <NavButton label={'Contact'}/>
            </div>
        </nav>
    );
}


export default function NavBar() {
    const { theme: { secondaryBackground, primary, secondary } } = useTheme();
    const { screenType } = useScreenSize();

    if (screenType <= ScreenType.sm) {
        return <SmallScreenNavBar />;
    }


    return (
        <nav style={navStyle(secondaryBackground, primary, secondary)}>
            <h1 style={headerStyle()}>NavBar</h1>
            <div style={buttonContainerStyle()}>
                <button style={themeSelectorStyle(primary, secondary)}/>
            </div>
        </nav>
    );
}