/** @format */

import { useState } from "react";
import UserProfile from "./components/UserProfile";

const inputBox = [
	{
		id: "full-name",
		name: "fullName",
		type: "text",
		autoComplete: "given-name",
		maxLength: "35",
	},
	{
		id: "age",
		name: "age",
		type: "number",
		autoComplete: "",
		maxLength: "",
	},
];

const InputBox = ({ id, name, type, autoComplete, maxLength }) => {
	return (
		<input
			id={id}
			name={name}
			type={type}
			autoComplete={autoComplete}
			maxLength={maxLength}
			required
			className="mx-auto mt-2 w-72 border-2 border-b-slate-200 border-l-[#808080] border-r-slate-200 border-t-[#808080] bg-slate-100 tracking-tighter focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800"
		/>
	);
};

function App() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [count, setCount] = useState(0);

	return (
		// <div className="App">
		// 	<form>
		// 		<label>
		// 			Name:
		// 			<input
		// 				type="text"
		// 				name="name"
		// 				className="border-2 border-black"
		// 			/>
		// 		</label>
		// 		<label>
		// 			Age:
		// 			<input
		// 				type="text"
		// 				name="age"
		// 				className="border-2 border-black"
		// 			/>
		// 		</label>
		// 		<input
		// 			type="submit"
		// 			value="Submit"
		// 			onClick={(e) => {
		// 				e.preventDefault();
		// 				setName(document.getElementsByName("name")[0].value);
		// 				setAge(document.getElementsByName("age")[0].value);
		// 			}}
		// 		/>
		// 	</form>
		// 	{/* pass to UserProfile name and age of the user inputs */}
		// 	<UserProfile name={name} age={age} />
		// </div>
		<div className="App flex h-screen w-screen place-items-center bg-[#55aaaa]">
			<div className="mx-1 w-[600px] min-w-[420px] max-w-xl border-4 border-b-[#808080] border-l-slate-200 border-r-[#808080] border-t-slate-200 bg-[#c0c0c0] shadow-[5px_5px_5px_black] sm:mx-auto">
				<div className="bg-gradient-to-r from-[#000281] to-[#1084d0] p-1 font-mono text-lg font-bold text-gray-50 transition duration-700 ease-in-out">
					Final Activity 1
				</div>

				<form
					className="mx-auto my-6 grid h-auto grid-cols-3 font-mono"
					action="#"
					method="POST"
				>
					<div className="col-span-2">
						<p className="mb-8 pl-10">
							<UserProfile name={name} age={age} />
						</p>
					</div>
					<div className="mx-auto">
						<button
							type="submit"
							className=" w-32 border-2 border-b-[#808080] border-l-slate-200 border-r-[#808080] border-t-slate-200 py-1 shadow-[2px_2px_2px_black] transition-colors hover:cursor-pointer hover:bg-zinc-400"
							onClick={(e) => {
								e.preventDefault();
								setName(
									document.getElementsByName("fullName")[0]
										.value
								);
								setAge(
									document.getElementsByName("age")[0].value
								);
							}}
						>
							Submit
						</button>
					</div>
					<div className="pl-10">
						<div className="mt-2 h-7">
							<label htmlFor="first-name" className="">
								<span className="underline">F</span>
								ull name:
							</label>
						</div>
						<div className="mt-2 h-7">
							<label htmlFor="last-name" className="">
								<span className="underline">A</span>
								ge:
							</label>
						</div>
					</div>
					<div className="">
						{inputBox.map((input) => (
							<InputBox
								key={input.id}
								id={input.id}
								name={input.name}
								type={input.type}
								autoComplete={input.autoComplete}
								maxLength={input.maxLength}
							/>
						))}
					</div>

					<div className="col-span-3 mt-8 pl-12 pr-10">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							className="h-4 w-4 border-gray-300 focus:ring-slate-200"
						/>
						<label
							htmlFor="remember-me"
							className="ml-2 text-sm text-gray-900 "
						>
							Remember me
						</label>
						<div className="float-right inline-block text-sm">
							{count <= 6 ? (
								<a
									href="#"
									className="font-medium text-gray-900 hover:underline"
									onClick={() =>
										setCount((count) => count + 1)
									}
								>
									Forgot your password?
								</a>
							) : (
								<a
									href="https://youtu.be/dQw4w9WgXcQ"
									className="font-medium text-gray-900 hover:underline"
									onClick={() =>
										setCount((count) => count + 1)
									}
								>
									Forgot your password?
								</a>
							)}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
