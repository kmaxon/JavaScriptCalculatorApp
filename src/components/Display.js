import React from "react";

function Display(props) {
    const displayStyle = {
        width: "350px",
        minHeight: "60px",
        height: "auto",
        margin: "0px",
        padding: "0px",
        background: "black",
        fontFamily: "'Consolas New', Consolas, monospace"
    };

    const expressionStyle = {
        width: "350px",
        minHeight: "24px",
        height: "auto",
        margin: "0px",
        padding: "0px",
        display: "flex",
        justifyContent: "right",
        alignItems: "flex-end",
        fontSize: "20px",
        color: "#D1A700",
    };

    const inputStyle = {
        width: "350px",
        height: "36px",
        margin: "0px",
        padding: "0px",
        display: "flex",
        justifyContent: "right",
        alignItems: "flex-end",
        fontSize: "30px",
        color: "white",
    };

    const pStyle = {
        margin: "0px",
        padding: "0px 3px 0px 0px",
        verticalAlign: "bottom",
        textAlign: "right"

    }

    return (
        <div style={displayStyle} id="display">
            <div style={expressionStyle}>
                <p style={pStyle}>{props.expression}</p>
            </div>
            <div style={inputStyle}>
                <p style={pStyle}>{props.input}</p>
            </div>
        </div>

    )
};

export default Display;