import React, { useState } from 'react';
import './Room.css';
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
    <div className={`room ${isLit ? 'lit':'dark'}`}>
        <h1>Welcome to my page..!</h1>
        
        <hr/>
        <h4>I created this page using ReactJs with surge deployment using github action. Below buttons are asigned some specific functionalities which you can test by yourself and find out what each button do.</h4>
        <p>Hayat love lit room, but light colors so now it's {isLit ? "lit" : "dark"} and he is <strong><i>{ happy ? "Happy" : "Sad"}</i></strong>. He said his age is : <strong>{getAge}</strong> but I don't think so, click below button to increase his age you think he is..:D.Take a screenshot and send back to me after increasing my age and setting my room light.</p> 
        <br/>
        <button className='d' onClick={update}>Toggle Light</button>
    
        <button className='b' onClick={updateAge}>Increase Age</button>
        
        <button className='b' onClick={decAge}>Decrease Age</button>
        
        {/* <button className='b' onClick={()=>{
            console.log('Button tag with arrow function');
        }}
        
        >Arrow function</button> */}

        <h5>Thank you for visiting my page, it is just for fun and learning and I know reading this line is difficult..:p</h5>
        <p><i>Hayat Muhammad Niazi..!</i></p>
    </div>
);
}
export default Room;