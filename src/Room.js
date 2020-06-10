import React, { useState } from 'react';
import './App.css';

function Room() {
    let [isLit, setLit] = useState(true);
    let [getAge, setAge] = useState(25);
    let [happy, setmode] = useState(true);
    function update(){
        
        console.log("Button pressed");
        setLit(!isLit);
        setmode(!happy);
        console.log('line executed');
    }
    const updateAge=()=>{
        console.log("Update Age");
        setAge(++getAge);
    }

    const decAge=()=>{
        console.log("Decrease Age");
        setAge(--getAge);
    }
    return (
    <div>
        Hayat love lit room, but light colors so now it's {isLit ? 'Lit' : 'Dark'} and he is { happy ? "Happy" : "Sad"}.
        <br/>
        Age : {getAge}
        <br/>
        <button onClick={update}>Toggle Light</button>
    <br/>
        <button onClick={updateAge}>Increase Age</button>
        <br/>
        <button onClick={decAge}>Decrease Age</button>
        <br/>
        <button onClick={()=>{
            console.log('Button tag with arrow function');
        }}
        
        >Arrow function</button>
    </div>
);
}
export default Room;