import React, { useState, useEffect, useRef } from "react";
import ButtonStandard from "./buttons/ButtonStandard";
import styled from "styled-components";

const EditForm = ({ post, onSave, onCancel, showOverlay }) => {
	const [postTitle, setPostTitle] = useState(post.postTitle);
	const [postDesc, setPostDesc] = useState(post.postDesc);
	const [postImage, setPostImage] = useState(post.postImage);
	const textareaRef = useRef(null);

	useEffect(() => {
		setPostTitle(post.postTitle);
		setPostDesc(post.postDesc);
		setPostImage(post.postImage);
	}, [post]);

	useEffect(() => {
		adjustTextareaHeight();
	}, [postDesc]);

	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	};

	const handleSave = () => {
		const updatedPost = {
			postId: post.postId,
			postUserAvatar: post.postUserAvatar,
			postUserName: post.postUserName,
			postTitle,
			postDesc,
			postImageAlt: post.postImageAlt,
			postImage,
		};
		if (typeof onSave === "function") {
			onSave(post.id, updatedPost);
		} else {
			console.error("onSave prop is not a function");
		}
	};

	return (
		<FormContainer>
			<ContentContainer>
				<h3>Edit title:</h3>
				<TitleTextarea
					ref={textareaRef}
					value={postTitle}
					onChange={(e) => setPostTitle(e.target.value)}
				/>
				<h3>Edit description:</h3>
				<DescriptionTextarea
					ref={textareaRef}
					value={postDesc}
					onChange={(e) => setPostDesc(e.target.value)}
				/>
			</ContentContainer>
			<ButtonsContainer>
				<ButtonStandard btnText="Save" type="button" onClick={handleSave} />
				<ButtonStandard btnText="Cancel" type="button" onClick={onCancel} />
			</ButtonsContainer>
			{showOverlay && <Overlay>Saving...</Overlay>}
		</FormContainer>
	);
};

export default EditForm;

// Styled Components
const FormContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 20px;
	padding: 16px;
	background-color: #2f4550;
	color: #b8dbd9;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: auto;
	background-color: #2f4550;
`;

const TitleTextarea = styled.textarea`
	font-size: 1.5rem;
	font-family: Urbanist, sans-serif;
	resize: both;
	text-indent: 5ch;
	width: 100%;
	color: #2f4550;
	background-color: #b8dbd9;
	border: 2px solid #b8dbd9;
	box-shadow: 0 4px 8px 0 rgba(184, 219, 217, 0.2),
		0 6px 20px 0 rgba(184, 219, 217, 0.19);
	border-radius: 25px 25px 0 0;
`;

const DescriptionTextarea = styled.textarea`
	font-family: Urbanist, sans-serif;
	text-indent: 8ch;
	font-size: 1.5rem;
	width: 100%;
	color: #2f4550;
	background-color: #b8dbd9;
	border: 2px solid #b8dbd9;
	box-shadow: 0 4px 8px 0 rgba(184, 219, 217, 0.2),
		0 6px 20px 0 rgba(184, 219, 217, 0.19);
	border-radius: 0 0 25px 25px;
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
	align-items: center;
	height: 5rem;
	gap: 8px;
	background-color: #2f4550;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 1.5em;
	z-index: 1;
`;
