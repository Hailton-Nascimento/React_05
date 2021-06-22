import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import "./Task.css";

import { useHistory } from "react-router-dom";

const Task = ({ task, handleTaskClik, handleTaskDeletion }) => {
	const history = useHistory();

	const handleTaskDetailsClick = () =>{
		history.push(`/${task.title}`)
	}



	return (
		<div
			className="task-container"
			style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
		>
			<div onClick={() => handleTaskClik(task.id)} className="task-title">
				{task.title}
			</div>
			<div className="buttons-container">
				<button
					onClick={handleTaskDetailsClick}
					className="see-task-details-button "
				>
					<CgInfo />
				</button>
				<button
					onClick={() => handleTaskDeletion(task.id)}
					className="remove-task-button"
				>
					<CgClose />
				</button>
			</div>
		</div>
	);
};
export default Task;
