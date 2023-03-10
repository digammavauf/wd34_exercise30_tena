import { useState } from "react";

const SampleFunctionalComponent = (data) => {
    function showAlert1() {
        alert(data.name);
    }
    let showAlert2 = function() {
        alert(data.name);
    }
    function showAlert1P(text) {
        alert(text);
    }
    let showAlert2P = function(text) {
        alert(text);
    }
    let {name, children} = data;
    let [nameState, setNameState] = useState("Bravo")
    let changeName = function(name) {
        setNameState("Edward")
    }

    let [name2, setName2State]  = useState("Sir Coco")
    let [foreground2, setForeground2State]  = useState("yellow")
    let [background2, setBackground2State]  = useState("red")
    let changeEverything2 = function(pName2, pForeground2, pBackground2) {
        setName2State(pName2)
        setForeground2State(pForeground2)
        setBackground2State(pBackground2)
    }

    return (
        <div>
            <div>
                <h1>
                    Structured Approach!
                    data.name: {data.name}
                </h1>
                data.children: {data.children}

                <h1>
                    Descructured Approch!
                    name: {name}
                </h1>
                children: {children}
            </div>
            <button onClick={showAlert1}>Alert1</button>
            <button onClick={showAlert2}>Alert2</button>
            <button onClick={()=>showAlert1P(data.name)}>Alert1P with Param</button>
            <button onClick={()=>showAlert2P(data.name)}>Alert2P with Param</button>

            <h1>My name is {nameState}</h1>
            <button onClick={()=>changeName("Edward")}>Change name to Edward</button>

            <h1
                    style={{padding: '0.5rem', color: foreground2, background: background2}}
            >
                {name2}
            </h1>

            <button
                    onClick={()=>changeEverything2("Flash", "yellow", "red")}
            >
                Flash
            </button>

            <button
                onClick={()=>changeEverything2("Green Lantern", "white", "green")}
            >
                Superman
            </button>

            <button
                onClick={()=>changeEverything2("Batman", "gray", "black")}                
            >
                Batman
            </button>
        </div>
     );
}
 
export default SampleFunctionalComponent