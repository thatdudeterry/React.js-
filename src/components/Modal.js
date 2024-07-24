import React from "react";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, image }) => {
	if (!isOpen) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<CloseButton onClick={onClose}>&times;</CloseButton>
				<ModalImage src={image} alt="Preview" />
			</ModalContent>
		</ModalOverlay>
	);
};

export default Modal;

// Styled Components

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(84, 111, 124, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	position: relative;
	max-width: 90%;
	max-height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #2f4550;
	border-radius: 8px;
	overflow: hidden;
`;

const CloseButton = styled.span`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 2rem;
	color: #fff;
	cursor: pointer;
	z-index: 1001;
`;

const ModalImage = styled.img`
	width: 100%;
	height: auto;
	object-fit: contain;
`;
