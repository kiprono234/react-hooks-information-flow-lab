import React,{useState} from "react";
// import Header from'./Header';

const Header = ({onDarkModeClick}) => {
    const [isDarkMode, setIsDarkMode] =useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode)
    }
    return (
        <header>
            <h1>My App</h1>
            <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
        </header>
    );
};
export default Header;