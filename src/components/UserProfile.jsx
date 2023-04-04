/** @format */

import React from "react";

function UserProfile(props) {
	const { name, age } = props;
	
	const Verification = () => {
		if (age >= 18) {
			return `Name: ${name} Age: ${age}`;
		} else if (!name || !age) {
			return "Please enter your name and age";
		} else {
			return `Name: ${name}, You are not allowed to see this page`;
		}
	};

	return (
		<div>
			{/* <Verification /> */}
			{age >= 18
				? `Name: ${name} Age: ${age}`
				: !name || !age
				? "Please enter your name and age"
				: `Name: ${name}, You are not allowed to see this page`}
		</div>
	);
}

export default UserProfile;
