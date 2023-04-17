import react, { useState } from "react";
import NumberPad from "./NumberPad";
import Operations from "./Operations";
import EqualSign from "./EqualSign";


function Buttons() {
    return (
        <div>
            <NumberPad />
            <Operations />
            <EqualSign />
        </div>
    )
};

export default Buttons;