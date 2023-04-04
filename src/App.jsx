/** @format */

import { useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	return (
		<div className="App">
			<form>
				<label>
					Name:
					<input
						type="text"
						name="name"
						className="border-2 border-black"
					/>
				</label>
				<label>
					Age:
					<input
						type="text"
						name="age"
						className="border-2 border-black"
					/>
				</label>
				<input
					type="submit"
					value="Submit"
					onClick={(e) => {
						e.preventDefault();
						setName(document.getElementsByName("name")[0].value);
						setAge(document.getElementsByName("age")[0].value);
					}}
				/>
			</form>
			{/* pass to UserProfile name and age of the user inputs */}
			<UserProfile name={name} age={age} />
		</div>
	);
}

export default App;
