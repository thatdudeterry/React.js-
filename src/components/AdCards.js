import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function AdCards(props) {
	return (
		<AdCard>
			<AdsTitle>{props.val.adsTitle}</AdsTitle>
			<Image src={props.val.adsImage} alt={props.val.adsImageAlt} />
			<AdsContentTitle>{props.val.adsContent}</AdsContentTitle>
			<AdsParagraph>{props.val.adsParagraph}</AdsParagraph>
			<ButtonsContainer>
				<StyledLink type="submit" to="/">
					Share
				</StyledLink>
			</ButtonsContainer>
		</AdCard>
	);
}

export default AdCards;

// Styled Components

const AdCard = styled.div`
	width: 100%;
	height: 400px;
	margin: 10px auto;
	background-color: #2f4550;
	border: 2px solid #b8dbd9;
	color: #b8dbd9;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5%;
	justify-content: space-evenly;
	box-sizing: border-box;
`;

const AdsTitle = styled.h2`
	font-size: 1.25rem;
	text-align: center;
	color: #b8dbd9;
`;

const AdsContentTitle = styled.h3`
	font-size: 1rem;
	text-align: center;
	color: #b8dbd9;
`;

const AdsParagraph = styled.p`
	width: 98%;
	color: #b8dbd9;
	font-size: 0.875rem;
	text-indent: 5ch;
	padding: 4px;
	box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 95%;
	align-items: center;
	height: 2rem;
	padding: 2%;
	margin: 1%;
	box-sizing: border-box;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 1.25rem;
	height: 1.75rem;
	width: 16ch;
	background-color: #b8dbd9;
	color: #000000;
	padding: 2%;
	margin: 1%;
	border-radius: 25px;
	cursor: pointer;
	text-align: center;
	border: 2px solid #000000;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;

	&:hover {
		background-color: #a7c9c7;
	}
`;

const Image = styled.img`
	align-items: center;
	justify-content: cover;
	width: 100%;
	height: auto;
	padding: 2px;
	box-sizing: border-box;
`;
