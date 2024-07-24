import React from "react";
import styled from "styled-components";
import Joley from "../images/Jellybean.png";

const JoleyAvatar = (props) => {
	return <Avatar src={Joley} alt={props.AvatarAlt} />;
};

export default JoleyAvatar;

// Styled Component

const Avatar = styled.img`
	cursor: pointer;
	border-radius: 50%;
	width: 48px;
	height: 48px;
	background-color: #2f4550;
	border: 2px solid #b8dbd9;
	box-shadow: 0 4px 8px 0 rgba(184, 219, 217, 0.2),
		0 6px 20px 0 rgba(184, 219, 217, 0.19);
`;
