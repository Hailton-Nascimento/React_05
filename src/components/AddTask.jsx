import React from "react";
import { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
	const [inputData, setInputDada] = useState("");

	const handleInputChange = (event) => {
		setInputDada(event.target.value);
	};


    const handeAddTaskClick = () =>{
        handleTaskAddition(inputData);
        setInputDada("");
    }
	return (
		<div className="add-task-container">
			<input
				onChange={handleInputChange}
                value={inputData}
				className="add-task-input"
				type="text"
                required
			/>
			<div className="add-task-button-container"></div>
			<Button onClick={handeAddTaskClick}>Adicionar</Button>
		</div>
	);
};

export default AddTask;
