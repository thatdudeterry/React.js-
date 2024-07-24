import React, { Component } from "react";
// Compomnents
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoAccessibility } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import logo from "../images/logo-no-background.png";

class Settings extends Component {
	render() {
		return (
			<div style={styles.body}>
				<Header />
				<main style={styles.container}>
					<nav style={styles.leftColumn}>
						<Nav />
					</nav>

					<section style={styles.rightColumn}>
						<span style={styles.logoContainer}>
							<img src={logo} alt="thatSpace logo" style={styles.logo} />
							<h1 style={styles.h1}> | Settings</h1>
						</span>
						<nav>
							<Link to="/userprofile" style={styles.button}>
								<CgProfile />
								User Profile
							</Link>
							<Link to="/display" style={styles.button}>
								<IoAccessibility />
								Settings & Privacy
							</Link>
							<Link to="/help" style={styles.button}>
								<IoIosHelpCircleOutline />
								Help & Support
							</Link>
							<Link to="/accessibility" style={styles.button}>
								<IoSettingsOutline />
								Display & Accessibility
							</Link>
							<Link to="/logout" style={styles.button}>
								<RiLogoutCircleRLine />
								Logout
							</Link>
						</nav>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Settings;

const styles = {
	body: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#586F7C",
		minHeight: "100vh",
	},

	container: {
		backgroundColor: "#586F7C",
		display: "flex",
		flexDirection: "row",
		minHeight: "100vh",
		width: "100%",
		maxWidth: "95%",
		margin: "0 auto",
		boxSizing: "border-box",
	},

	logoContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "left",
		color: "#F4F4F9",
		borderBottom: "2px solid #F4F4F9",
		padding: "10px",
		margin: "10px",
	},

	logo: {
		height: "32px",
		margin: "10px",
		color: "#B8DBD9",
	},

	h1: {
		color: "#B8DBD9",
	},

	nav: {
		display: "flex",
		width: "90%",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		padding: "20px",
		margin: "20px 20px 20px 0",
	},

	button: {
		display: "flex",
		fontWeight: "bold",
		fontSize: "1.375rem",
		gap: "8px",
		height: "2.5rem",
		color: "#B8DBD9",
		alignItems: "center",
		margin: "8px 0",
		cursor: "pointer",
		textAlign: "left",
		textDecoration: "none",
		border: "none",
		width: "100%",
	},

	leftColumn: {
		flex: "1",
		display: "flex",
		flexDirection: "column",
		height: "calc(100vh - 160px)",
	},

	rightColumn: {
		flex: "4",
		display: "flex",
		flexDirection: "column",
		height: "calc(100vh - 160px)",
	},

	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "#000000",
		transition: "background-color 4200ms ease-in-out",
		zIndex: 1,
		opacity: 0,
	},
};
