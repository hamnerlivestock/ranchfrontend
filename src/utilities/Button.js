import React from "react";
import { Link } from "react-router-dom";
import "../styles/utilities/Button.css";

const STYLES = ["btn--primary", "btn--outlaw", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
    childern,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checktButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    
    const checktButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to ="/trailer" className="btn-mobile">
            <button
                className={`btn ${checktButtonStyle} ${checktButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {childern}
            </button>
        </Link>
    )
}