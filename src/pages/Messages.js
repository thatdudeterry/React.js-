import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Images
import logo from "../images/logo-no-background.png";

function Messages() {
	const [userData, setUserData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Fetch data when the component mounts
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch("https://randomuser.me/api/?results=25");
			const responseJSON = await response.json();

			const users = responseJSON.results.map((user, index) => ({
				id: user.login.uuid,
				firstName: user.name.first,
				lastName: user.name.last,
				picture: user.picture.large,
				isOnline: index % 2 === 0, // Mock online status for demonstration
			}));

			console.log(users);
			setUserData(users);
			setIsLoaded(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Body>
			<Header />
			<LogoContainer>
				<Logo src={logo} alt="thatSpace logo" />
				<Heading>| Messages</Heading>
			</LogoContainer>
			<MainContainer>
				<LeftColumn>
					<Nav />
				</LeftColumn>
				<RightColumn>
					<ContentContainer>
						{isLoaded ? (
							<UserList>
								{userData.map((user) => (
									<UserListItem key={user.id}>
										<Avatar
											src={user.picture}
											alt={`${user.firstName} ${user.lastName}`}
										/>
										<NameContainer>
											<FriendName>
												<p>
													<strong>
														{user.firstName} {user.lastName}
													</strong>
												</p>
											</FriendName>
											{user.isOnline && <OnlineIndicator />}
										</NameContainer>
									</UserListItem>
								))}
							</UserList>
						) : (
							<l-newtons-cradle
								size="78"
								speed="1.4"
								color="#B8DBD9"
							></l-newtons-cradle>
						)}
					</ContentContainer>
				</RightColumn>
			</MainContainer>
			<Footer />
		</Body>
	);
}

export default Messages;

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
	flex: 1; /* Allow it to expand and fill available space */
	width: 100%;
	max-width: 95%;
	margin: 0 auto;
	box-sizing: border-box;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	color: #f4f4f9;
	border-bottom: 2px solid #f4f4f9;
	padding: 10px;
	width: 100%;
	box-sizing: border-box;
	margin: 10px;
`;

const Logo = styled.img`
	height: 32px;
	margin: 10px;
`;

const Heading = styled.h1`
	color: #b8dbd9;
	margin: 0;
`;

const LeftColumn = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const RightColumn = styled.section`
	flex: 4;
	display: flex;
	flex-direction: column;
`;

const ContentContainer = styled.div`
	overflow-y: auto; /* Enable vertical scrolling */
	flex: 1; /* Allow it to expand and fill available space */
	position: relative;
`;

const UserList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const UserListItem = styled.li`
	display: flex;
	flex-direction: row;
	border: 2px solid white;
	width: 100%; /* Ensure the list item takes full width */
	height: 100px;
	background-color: #2f4550;
	color: #f4f4f9;
	align-items: center;
	justify-content: flex-start;
	margin: 8px 0; /* Margin top and bottom to ensure spacing */
	box-shadow: 0 4px 8px 0 rgba(244, 244, 249, 0.2),
		0 6px 20px 0 rgba(244, 244, 249, 0.1);
	border-radius: 50px;
	overflow: hidden;
	padding: 10px;
`;

const Avatar = styled.img`
	cursor: pointer;
	border-radius: 50%;
	width: 75px;
	height: 75px;
	margin-right: 10px;
	background-color: #2f4550;
	border: 2px solid #b8dbd9;
	box-shadow: 0 4px 8px 0 rgba(244, 244, 249, 0.2),
		0 6px 20px 0 rgba(244, 244, 249, 0.1);
`;

const NameContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;

const FriendName = styled.div`
	margin-right: 20px;
`;

const OnlineIndicator = styled.div`
	position: absolute;
	right: -10px; /* Adjust to align with the end of the last name */
	top: 50%;
	transform: translateY(-50%);
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background-color: #00ff00;
	border: 2px solid #2f4550;
`;
