import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { newtonsCradle } from "ldrs";

// Components
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserForm from "../components/UserForm";

// Images
import logo from "../images/logo-no-background.png";

function UserProfile() {
	const [userData, setUserData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	// Registers the loading animation
	newtonsCradle.register();

	useEffect(() => {
		// Fetch data when the component mounts
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			// Await the fetch call to get the response
			const response = await fetch("https://randomuser.me/api/");

			// Await the response to be converted to JSON
			const responseJSON = await response.json();

			// Map the data to the required format
			const user = responseJSON.results.map((user) => ({
				firstName: user.name.first,
				lastName: user.name.last,
				address: `${user.location.street.number} ${user.location.street.name}`,
				city: user.location.city,
				state: user.location.state,
				postCode: user.location.postcode,
				userName: user.login.username,
				password: user.login.password,
				phone: user.phone,
				picture: user.picture.medium,
			}));

			// Log the user array to the console
			console.log(user);

			// Set the user data in the state
			setUserData(user);
			setIsLoaded(true); // Update loading state
		} catch (err) {
			// Catch any errors that occur during the fetch or mapping
			console.log(err);
		}
	};

	return (
		<Body>
			<Header />
			<MainContainer>
				<LeftColumn>
					<Nav />
				</LeftColumn>
				<RightColumn>
					<LogoContainer>
						<Logo src={logo} alt="thatSpace logo" />
						<Heading>| UserProfile</Heading>
					</LogoContainer>
					{isLoaded && userData.length > 0 ? (
						userData.map((user) => (
							<UserForm
								key={user.userName}
								firstName={user.firstName}
								lastName={user.lastName}
								address={user.address}
								city={user.city}
								state={user.state}
								postCode={user.postCode}
								userName={user.userName}
								password={user.password}
								phone={user.phone}
								picture={user.picture}
							/>
						))
					) : (
						<l-newtons-cradle
							size="78"
							speed="1.4"
							color="#B8DBD9"
						></l-newtons-cradle>
					)}
				</RightColumn>
			</MainContainer>
			<Footer />
		</Body>
	);
}

export default UserProfile;

// Styled Components

const Body = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #586f7c;
	min-height: 100vh;
`;

const MainContainer = styled.main`
	background-color: #586f7c;
	display: flex;
	flex-direction: row;
	min-height: 100vh;
	width: 100%;
	max-width: 95%;
	margin: 0 auto;
	box-sizing: border-box;
`;

const LogoContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: #f4f4f9;
	border-bottom: 2px solid #f4f4f9;
	padding: 10px;
	margin: 10px;
`;

const Logo = styled.img`
	height: 32px;
	margin-right: 10px;
`;

const Heading = styled.h1`
	color: #b8dbd9;
	margin: 0;
`;

const LeftColumn = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);
`;

const RightColumn = styled.section`
	flex: 4;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);
	padding: 20px;
`;
