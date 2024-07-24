import React from "react";
import styled from "styled-components";
import logo from "../images/logo-no-background.png";
// Styled Components

const FooterContainer = styled.footer`
	background: #2f4550;
	color: #f4f4f9;
	font-size: 1rem;
	position: fixed;
	width: 100%;
	border-top: 3px solid #f4f4f9;
	padding: 10px 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const LogoContainer = styled.span`
	display: flex;
	align-items: center;
	color: #f3dfa2;
`;

const Logo = styled.img`
	height: 24px;
	margin-right: 10px;
`;

const StyledIcon = styled.a`
	color: #b8dbd9;
	font-size: 24px;
	margin: 0 10px;
	text-decoration: none;

	&:hover {
		color: #b8dbd9;
	}
`;

const StyledH2 = styled.h2`
	color: #b8dbd9;
	font-size: 12px;
	margin: 0 10px;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<LogoContainer>
				<Logo src={logo} alt="thatSpace logo" />
			</LogoContainer>
			<StyledIcon
				href="https://github.com/biesboerTerry-FS"
				target="_blank"
				rel="noopener noreferrer"
			></StyledIcon>
			<StyledIcon
				href="https://www.instagram.com"
				target="_blank"
				rel="noopener noreferrer"
			></StyledIcon>
			<StyledIcon
				href="https://www.linkedin.com/in/tbiesboerjr/"
				target="_blank"
				rel="noopener noreferrer"
			></StyledIcon>
			<StyledIcon
				href="https://www.facebook.com/"
				target="_blank"
				rel="noopener noreferrer"
			></StyledIcon>
			<StyledIcon href="mailto:tbiesboer@gmail.com"></StyledIcon>
			<StyledIcon href="tel:1-314-723-1421">{/* <PiPhoneFill /> */}</StyledIcon>
			<StyledH2>&copy; 2024 | thatdudeterry | All rights reserved.</StyledH2>
		</FooterContainer>
	);
};

export default Footer;
