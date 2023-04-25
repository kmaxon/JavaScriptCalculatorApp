import React from "react";


function Buttons(props) {
    const padStyle = {
        height: "350px",
        width: "350px",
        display: "flex",
        flexWrap: "wrap",
        borderBottom: "solid black 5px"
    };

    const numberButtonStyle = {
        height: "70px",
        width: "87.5px",
        color: "white",
        fontSize: "20px",
        background: "#4A4A4A",
    };

    const operatorButtonStyle = {
        height: "70px",
        width: "87.5px",
        color: "white",
        fontSize: "20px",
        background: "grey",
    };

    const allClearButtonStyle = {
        height: "70px",
        width: "175px",
        background: "red",
        fontSize: "20px",
        color: "white",
    };

    const tallButtonStyle = {
        height: "140px",
        width: "87.5px",
        margin: "0px 0px 0px 0px",
        color: "white",
        fontSize: "20px",
        background: "blue",
    };

    const zeroButtonStyle = {
        height: "70px",
        width: "175px",
        color: "white",
        fontSize: "20px",
        background: "#4A4A4A",
    };

    const decimalButtonStyle = {
        height: "70px",
        width: "87.5px",
        color: "white",
        background: "#4A4A4A",
    };

    const bottomStyle = {
        height: "140px",
        width: "262.5px",
        display: "flex",
        flexWrap: "wrap",
    }

    return (
        <div style={padStyle} >
            <div id="all-clear">
                <button style={allClearButtonStyle} onClick={() => props.allClearClick()}>AC</button>
            </div>
            <div id="divide">
                <button style={operatorButtonStyle} onClick={() => props.onClick("/")}>/</button>
            </div>
            <div id="multiply">
                <button style={operatorButtonStyle} onClick={() => props.onClick("*")}>x</button>
            </div>
            <div id="seven">
                <button style={numberButtonStyle} onClick={() => props.onClick("7")}>7</button>
            </div>
            <div id="eight">
                <button style={numberButtonStyle} onClick={() => props.onClick("8")}>8</button>
            </div>
            <div id="nine">
                <button style={numberButtonStyle} onClick={() => props.onClick("9")}>9</button>
            </div>
            <div id="subtract">
                <button style={operatorButtonStyle} onClick={() => props.onClick("-")}>-</button>
            </div>
            <div id="four">
                <button style={numberButtonStyle} onClick={() => props.onClick("4")}>4</button>
            </div>
            <div id="five">
                <button style={numberButtonStyle} onClick={() => props.onClick("5")}>5</button>
            </div>
            <div id="six">
                <button style={numberButtonStyle} onClick={() => props.onClick("6")}>6</button>
            </div>
            <div id="add">
                <button style={operatorButtonStyle} onClick={() => props.onClick("+")}>+</button>
            </div>
            <div style={bottomStyle}>
                <div id="one">
                    <button style={numberButtonStyle} onClick={() => props.onClick("1")}>1</button>
                </div>
                <div id="two">
                    <button style={numberButtonStyle} onClick={() => props.onClick("2")}>2</button>
                </div>
                <div id="three">
                    <button style={numberButtonStyle} onClick={() => props.onClick("3")}>3</button>
                </div>
                <div id="zero">
                    <button style={zeroButtonStyle} onClick={() => props.onClick("0")}>0</button>
                </div>
                <div id="decimal">
                    <button style={decimalButtonStyle} onClick={() => props.onClick(".")}>.</button>
                </div>
            </div>
            <div id="equals">
                <button style={tallButtonStyle} onClick={() => props.equalSignClick()}>=</button>
            </div>
        </div>
    )
};

export default Buttons;