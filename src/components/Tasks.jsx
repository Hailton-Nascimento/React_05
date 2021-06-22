import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClik, handleTaskDeletion }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					handleTaskClik={handleTaskClik}
					handleTaskDeletion={handleTaskDeletion}
				/>
			))}
		</>
	);
};
export default Tasks;
