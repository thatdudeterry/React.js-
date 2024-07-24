import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	font-weight: bold;
	font-size: 1.5rem;
	height: 2.5rem;
	width: 10ch;
	background-color: #b8dbd9;
	color: #2f4550;
	padding: 10px;
	margin: 20px;
	cursor: pointer;
	text-align: center;
	border-radius: 25px;
	border: 2px solid #b8dbd9;
	box-shadow: 0 4px 8px 0 rgba(184, 219, 217, 0.2),
		0 6px 20px 0 rgba(184, 219, 217, 0.19);

	&:hover {
		background-color: #a3c6c4; // Optional: Add a hover effect
	}

	&:focus {
		outline: none; // Optional: Remove focus outline
	}
`;

const ButtonSmall = (props) => {
	return (
		<div>
			<StyledButton type={props.type} onClick={props.onClick}>
				{props.btnText}
			</StyledButton>
		</div>
	);
};

export default ButtonSmall;
