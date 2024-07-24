import React from "react";
import { Link } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import { RiLineChartFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import styled from "styled-components";

// All routes verified
function Nav() {
	return (
		<NavContainer>
			<StyledLink to="/">
				<FaNewspaper />
				<span>Newsfeed</span>
			</StyledLink>
			<StyledLink to="/charts">
				<RiLineChartFill />
				<span>Charts</span>
			</StyledLink>
			<StyledLink to="/messages">
				<TbMessageCircle />
				<span>Messages</span>
			</StyledLink>
			<StyledLink to="/friends">
				<FaUserFriends />
				<span>Friends</span>
			</StyledLink>
			<StyledLink to="/gallery">
				<GrGallery />
				<span>Gallery</span>
			</StyledLink>
		</NavContainer>
	);
}

export default Nav;

// Styled Components

const NavContainer = styled.nav`
	display: flex;
	width: 90%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 20px;
	margin: 20px 20px 20px 0;
`;

const StyledLink = styled(Link)`
	display: flex;
	font-weight: bold;
	font-size: 1.375rem;
	gap: 8px;
	height: 2.5rem;
	color: #b8dbd9;
	align-items: center;
	margin: 8px 0;
	cursor: pointer;
	text-align: left;
	text-decoration: none;
	border: none;
	width: 100%;
`;
