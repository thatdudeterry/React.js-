import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function UserForm(props) {
	console.log("Rendering user form");
	return (
		<ContentContainer>
			<UserHeader>
				<UserPicture src={props.picture} alt="User" />
				<UserName>
					<FirstName>{props.firstName}</FirstName>
					<LastName>{props.lastName}</LastName>
				</UserName>
			</UserHeader>
			<UserDetails>
				<Column>
					<UserInfo>
						<Label>Address:</Label> <span>{props.address}</span>
					</UserInfo>
					<UserInfo>
						<Label>City:</Label> <span>{props.city}</span>
					</UserInfo>
					<UserInfo>
						<Label>Phone:</Label> <span>{props.phone}</span>
					</UserInfo>
				</Column>
				<Column>
					<UserInfo>
						<Label>State:</Label> <span>{props.state}</span>
					</UserInfo>
					<UserInfo>
						<Label>Postcode:</Label> <span>{props.postCode}</span>
					</UserInfo>
					<UserInfo>
						<Label>Username:</Label> <span>{props.userName}</span>
					</UserInfo>
					<UserInfo>
						<Label>Password:</Label> <span>{props.password}</span>
					</UserInfo>
				</Column>
			</UserDetails>
			<SaveLink to="/save">Save</SaveLink>
		</ContentContainer>
	);
}

export default UserForm;

// Styled Components

const ContentContainer = styled.article`
	display: flex;
	flex-direction: column;
	width: 60%;
	margin: 20px;
	padding: 16px;
	background-color: #2f4550;
	color: #b8dbd9;
	border: 2px solid #b8dbd9;
	box-shadow: 0 4px 8px 0 rgba(184, 219, 217, 0.2),
		0 6px 20px 0 rgba(184, 219, 217, 0.19);
	border-radius: 25px;
	position: relative; /* For positioning the save link */
`;

const UserHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-bottom: 16px;
	margin: 16px;
	gap: 10px;
	border-bottom: 2px solid #f4f4f9;
`;

const UserPicture = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 16px;
	border: 2px solid #b8dbd9;
`;

const UserName = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const FirstName = styled.span`
	font-weight: bold;
	font-size: 1.75em;
`;

const LastName = styled.span`
	font-size: 1.25em;
`;

const UserDetails = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	gap: 20px;
	margin-bottom: 40px;
	padding-top: 10px;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const UserInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Label = styled.span`
	font-weight: bold;
	color: #f4f4f9;
	width: 100px;
`;

const SaveLink = styled(Link)`
	position: absolute;
	bottom: 16px;
	right: 16px;
	color: #b8dbd9;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;
