import React, {useState} from "react";


const InputElement = () => {
    const [inputEntered, setInputEntered] = useState("");
    const [inputHistory, setInputHistory] = useState([]);
    return <div>
    <input 
    onChange={(e) => {
    	setInputEntered(e.target.value)
    	setInputHistory([...inputHistory, e.target.value])
    }
}
    placeholder="Enter some text"/>
    <br/>
    {inputEntered}
    <hr/><br/>
    <ul>
    {inputHistory.map(entry => {
        return <div>{entry}</div>
    })}
    </ul>
    </div>
};

export default InputElement;