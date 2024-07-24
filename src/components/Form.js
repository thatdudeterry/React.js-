import React, { useState, useRef, useEffect } from "react";
import Avatar from "./Avatar";
import styled from "styled-components";

const Form = ({ addPost, postToEdit }) => {
	const [descValue, setDescValue] = useState(
		postToEdit ? postToEdit.postDesc : ""
	);
	const descRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const newPost = {
			...postToEdit,
			postTitle: formData.get("postTitle"),
			postDesc: descValue,
			id: postToEdit ? postToEdit.id : Date.now(),
		};

		if (typeof addPost === "function") {
			addPost(newPost);
			console.log("Post added / Form");
		} else {
			console.error("addPost is not a function");
		}

		event.target.reset();
		setDescValue("");
	};

	const handleDescChange = (event) => {
		const { value } = event.target;
		setDescValue(value);
		autoResizeTextarea();
	};

	const autoResizeTextarea = () => {
		if (descRef.current) {
			descRef.current.style.height = "auto";
			descRef.current.style.height = `${descRef.current.scrollHeight}px`;
		}
	};

	useEffect(() => {
		autoResizeTextarea();
	}, [descValue]);

	return (
		<StyledForm onSubmit={handleSubmit}>
			<AvatarContainer>
				<Avatar name="postUserAvatar" alt="User avatar" />
				<Username>Terry Biesboer</Username>
			</AvatarContainer>

			<ContentContainer>
				<TextWrapper>
					<StyledTextareaTitle
						type="text"
						name="postTitle"
						placeholder="Title your post"
						required
					/>
					<StyledTextareaDesc
						name="postDesc"
						placeholder="Whatcha' thinking about?!?"
						required
						value={descValue}
						onChange={handleDescChange}
						ref={descRef}
						as="textarea"
					/>
				</TextWrapper>
			</ContentContainer>

			<ButtonsContainer>
				<SubmitButton type="submit">Post</SubmitButton>
			</ButtonsContainer>
		</StyledForm>
	);
};

export default Form;

// Styled Components
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 95%;
	margin: 20px;
	padding: 16px;
	background-color: #2f4550;
	border: 2px solid #b8dbd9;
	box-shadow: 0 4px 8px 0 rgba(184, 219, 217, 0.2),
		0 6px 6px 0 rgba(184, 219, 217, 0.19);
	border-radius: 25px;
`;

const AvatarContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 5px;
	padding: 8px;
`;

const Username = styled.h2`
	font-size: 1.25rem;
	padding-left: 25px;
	margin: 10px;
	color: #b8dbd9;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #2f4550;
`;

const TextWrapper = styled.span`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const StyledTextareaTitle = styled.textarea`
	font-family: Urbanist, sans-serif;
	font-size: 1.25rem;
	text-indent: 2.5ch;
	padding: 8px;
	margin: 8px 8px 0 8px;
	width: 100%;
	color: #000000;
	background-color: #b8dbd9;
	border: 2px solid #000000;
	border-radius: 25px 25px 0 0;
	resize: none;
	overflow: hidden;
	border-top: 2px solid #000000;
`;

const StyledTextareaDesc = styled.textarea`
	font-family: Urbanist, sans-serif;
	font-size: 1.25rem;
	text-indent: 2.5ch;
	padding: 8px;
	margin: 0 8px 8px 8px;
	width: 100%;
	color: #000000;
	background-color: #b8dbd9;
	border: 2px solid #000000;
	border-radius: 0 0 25px 25px;
	border-bottom: 2px solid #000000;
	resize: none;
	overflow: hidden;
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

const SubmitButton = styled.button`
	font-weight: bold;
	text-decoration: none;
	font-size: 1.25rem;
	height: 3.5rem;
	width: 16ch;
	background-color: #b8dbd9;
	color: #000000;
	padding: 2%;
	margin: 1%;
	border-radius: 25px;
	cursor: pointer;
	text-align: center;
	border: 2px solid #000000;
	box-shadow: 0 4px 8px 0 rgba(244, 244, 249, 0.19),
		0 6px 20px 0 rgba(244, 244, 249, 0.19);
	display: flex;
	justify-content: center;
	align-items: center;
`;
