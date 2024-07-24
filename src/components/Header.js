import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import HamburgerMenu from "./HamburgerMenu";

// Images
import avatar from "../images/avatar.jpeg";
import logo from "../images/logo-no-background.png";

// Icons
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

function Header() {
	const [navOpen, setNavOpen] = useState(false);

	const toggleNav = () => {
		setNavOpen(!navOpen);
	};

	return (
		<HeaderContainer>
			<UserActions>
				<Link to="/settings">
					<Avatar src={avatar} alt="User Avatar" />
				</Link>
			</UserActions>

			<LogoContainer>
				<Search>
					<SearchButton type="button">
						<FaSearch />
					</SearchButton>
					<SearchInput type="text" placeholder="Search..." />
					<Logo src={logo} alt="thatSpace logo" />
				</Search>
			</LogoContainer>

			<HamburgerContainer>
				<HamburgerMenu isNavOpen={navOpen} onClick={toggleNav} />
			</HamburgerContainer>

			{navOpen && <MobileMenuOverlay onClick={toggleNav} />}
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.header`
	background-color: #2f4550;
	color: #f4f4f9;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	border-bottom: 5px solid #000000;
	position: relative;
`;

const UserActions = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 5px;
	margin: 5px;
	background-color: #2f4550;
	justify-content: space-between;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Logo = styled.img`
	height: 32px;
	margin: 5px;
	margin-right: 30px;
`;

const Search = styled.div`
	display: flex;
	align-items: end;

	@media (max-width: 906px) {
		display: none;
	}
`;

const SearchInput = styled.input`
	width: 150px;
	padding: 8px;
	border: none;
	border-radius: 50px;
	background-color: #b8dbd9;
`;

const SearchButton = styled.button`
	background-color: #2f4550;
	color: #b8dbd9;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`;

const HamburgerContainer = styled.div`
	display: flex;
	align-items: left;
	z-index: 1;
`;

const MobileMenuOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #2f4550;
	opacity: 0.95;
	z-index: 0;
`;
