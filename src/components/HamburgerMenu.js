import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import styled from "styled-components";
import Nav from "./Nav";

const HamburgerMenu = ({ isNavOpen, onClick }) => {
	return (
		<>
			<Container>
				<HamburgerButton onClick={onClick}>
					{isNavOpen ? <FaTimes /> : <FaBars />}
				</HamburgerButton>
			</Container>
			{isNavOpen && <NavMenu />}
		</>
	);
};

export default HamburgerMenu;

// Styled Components
const Container = styled.div`
	position: relative;
`;

const HamburgerButton = styled.button`
	background-color: #2f4550;
	border: none;
	color: #b8dbd9;
	font-size: 2rem;
	cursor: pointer;
	padding: 10px;
	position: realtive;
	top: 0px;
	right: 0px;
	// bottom: 20px;
	z-index: 1001;

	@media (min-width: 906px) {
		display: none;
	}
`;

const NavMenu = styled(Nav)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 20px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #2f4550;
	color: #b8dbd9;
	z-index: 1000;
`;
