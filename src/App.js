import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { BrowserRouter as Routrer, Route } from "react-router-dom";

import "./App.css";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = () => {
	const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    }
    fetchTasks();
    
  },[]);

	const handleTaskAddition = (taskTitle) => {
		if (taskTitle !== "") {
			const newTasks = [
				...tasks,
				{
					title: taskTitle,
					id: uuidv4(),
					completed: false,
				},
			];
			setTasks(newTasks);
		}
	};

	const handleTaskClik = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };
			return task;
		});
		setTasks(newTasks);
	};

	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
	};
	return (
		<Routrer>
			<div className="container">
				<Header />
				<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClik={handleTaskClik}
								handleTaskDeletion={handleTaskDeletion}
							/>
						</>
					)}
				/>
				<Route path="/:taskTitle" exact component={TaskDetails} />
			</div>
		</Routrer>
	);
};

export default App;
