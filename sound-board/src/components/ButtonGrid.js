import React from "react";
import Button from "./Button";
import "./ButtonGrid.css";

const ButtonGrid = () => {
    return (
        <div className="button-grid">
            <Button name="/Sweden.mp3" />
            <Button name="/gangnam.mp3" />
            <Button name="/Sweden.mp3" />
            <Button name="/gangnam.mp3" />
        </div>
    )
}

export default ButtonGrid;