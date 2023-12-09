import React from "react";
import TodoList from "./ToDoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">My ToDo List</h1>
			<TodoList />

		</div>
	);
};

export default Home;
