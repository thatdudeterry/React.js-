import React from "react";
import { Link } from "react-router-dom";
import EditForm from "./EditForm";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

function PostCard({ posts, onEdit, onDelete, isEditing, onSave, onCancel }) {
	console.log("Rendering postcard", posts);

	// Return nothing if posts is undefined
	if (!posts) {
		return null;
	}

	return (
		<PostCardContainer>
			<AvatarContainer>
				{posts.postUserAvatar}
				<UserName>{posts.postUserName}</UserName>
			</AvatarContainer>

			<ContentContainer>
				<Title>{posts.postTitle}</Title>
				{posts.postImage && (
					<PostImage src={posts.postImage} alt={posts.postImageAlt} />
				)}
				<Description>{posts.postDesc}</Description>
			</ContentContainer>
			{!isEditing && (
				<ButtonsContainer>
					<StyledLink onClick={onEdit}>
						<FaEdit />
					</StyledLink>
					<StyledLink onClick={onDelete}>
						<FaTrashAlt />
					</StyledLink>
				</ButtonsContainer>
			)}
			{isEditing && (
				<EditContainer>
					<EditForm
						post={posts}
						onSave={onSave}
						onCancel={onCancel}
						showOverlay={true}
					/>
				</EditContainer>
			)}
		</PostCardContainer>
	);
}

export default PostCard;

// Styled Components

const PostCardContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 95%;
	margin: 20px;
	padding: 16px;
	background-color: #2f4550;
	color: #b8dbd9;
	border: 2px solid #b8dbd9;
	box-shadow: 0 4px 8px 0 rgba(184, 219, 217, 0.2),
		0 6px 20px 0 rgba(184, 219, 217, 0.1);
	border-radius: 25px;
`;

const AvatarContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
	margin: 5px;
	padding: 8px;
`;

const UserName = styled.h2`
	font-size: 1.375rem;
	padding-left: 25px;
	margin: 10px;
	color: #b8dbd9;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;
	background-color: #2f4550;
`;

const Title = styled.h3`
	font-size: 1rem;
	text-indent: 2.5ch;
	padding: 8px;
	margin: 8px 8px 0 8px;
	width: 100%;
	color: #000000;
	background-color: #b8dbd9;
	border-top: 2px solid #000000;
	border-right: 2px solid #000000;
	border-left: 2px solid #000000;
	border-radius: 25px 25px 0 0;
`;

const Description = styled.p`
	display: flex;
	text-indent: 5ch;
	flex-direction: row;
	justify-content: flex-end;
	font-size: 1.5rem;
	width: 100%;
	align-items: center;
	height: auto;
	margin: 0 8px 8px 8px;
	padding: 8px;
	color: #2f4550;
	background-color: #b8d8d9;
	border-right: 2px solid #000000;
	border-bottom: 2px solid #000000;
	border-left: 2px solid #000000;
	border-radius: 0 0 25px 25px;
`;

const PostImage = styled.img`
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: auto;
	height: auto;
	align-items: center;
	margin: 0 8px;
	padding: 0 8px;
	background-color: #b8dbd9;
	border-right: 2px solid #000000;
	border-left: 2px solid #000000;
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 95%;
	align-items: center;
	height: 5rem;
	gap: 8px;
	margin-right: 18px;
	padding-right: 18px;
`;

const StyledLink = styled(Link)`
	font-size: 2rem;
	border: #2f4550;
	background-color: #2f4550;
	color: #b8dbd9;
	margin-left: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const EditContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
