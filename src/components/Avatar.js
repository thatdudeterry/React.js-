import React from "react";
import styled from "styled-components";
import avatar from "../images/avatar.jpeg";

const Avatar = (props) => {
	return (
		<AvatarImage
			src={avatar}
			alt={props.AvatarAlt || "Avatar"}
			title={props.userName || "User"}
		/>
	);
};

export default Avatar;

const AvatarImage = styled.img`
	cursor: pointer;
	border-radius: 50%;
	width: 48px;
	height: 48px;
	background-color: #2f4550;
	border: 2px solid #b8dbd9;
	box-shadow: 0 4px 8px 0 rgba(184, 219, 217, 0.2),
		0 6px 20px 0 rgba(184, 219, 217, 0.19);
`;
