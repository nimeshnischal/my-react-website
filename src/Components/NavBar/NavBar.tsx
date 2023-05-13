import React from "react";
import { useTheme } from "../Theme/ThemeContext";

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


export default function NavBar() {
    const { theme: { secondaryBackground, primary, secondary } } = useTheme();

    return (
        <nav style={navStyle(secondaryBackground, primary, secondary)}>
            <h1 style={headerStyle()}>NavBar</h1>
            <div className="button-container">
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
            </div>
        </nav>
    );
}