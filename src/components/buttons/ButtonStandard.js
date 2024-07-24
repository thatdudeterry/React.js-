import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	font-weight: bold;
	font-size: 1.5rem;
	height: 3.5rem;
	width: 16ch;
	padding: 2%;
	margin: 1%;
	border-radius: 25px;
	cursor: pointer;
	text-align: center;
	border: 2px solid #000000;
	background-color: #b8dbd9;
`;

const ButtonStandard = (props) => {
	return (
		<div>
			<StyledButton type={props.type} onClick={props.onClick}>
				{props.btnText}
			</StyledButton>
		</div>
	);
};

export default ButtonStandard;
