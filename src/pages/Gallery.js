import React, { Component } from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

// Images
import logo from "../images/logo-no-background.png";
import yoshi1 from "../gallery/yoshi1.jpg";
import cannabis from "../gallery/cannabis.jpeg";
import trees from "../gallery/trees.jpg";
import yoshi2 from "../gallery/yoshi2.jpg";
import joley1 from "../gallery/joley1.JPG";
import yoshi3 from "../gallery/yoshi3.JPG";
import joley2 from "../gallery/joley2.JPG";
import us from "../gallery/us.jpeg";
import joley3 from "../gallery/joley3.jpeg";
import joley4 from "../gallery/joley4.JPG";
import joley5 from "../gallery/joley5.jpeg";
import mygirls2 from "../gallery/mygirls2.jpg";
import joley6 from "../gallery/joley6.jpg";
import yoshi4 from "../gallery/yoshi4.jpg";
import mygirls from "../gallery/mygirls.jpeg";
import queen from "../gallery/queensgambit.jpeg";

class Gallery extends Component {
	state = {
		images: [
			{ src: yoshi1, alt: "Yoshi" },
			{ src: cannabis, alt: "Cannabis" },
			{ src: trees, alt: "Tree growing out of second story window" },
			{ src: yoshi2, alt: "Yoshi" },
			{ src: joley1, alt: "Joley" },
			{ src: yoshi3, alt: "Yoshi" },
			{ src: joley2, alt: "Joley" },
			{ src: joley3, alt: "Joley" },
			{ src: us, alt: "Photo 3" },
			{ src: joley4, alt: "Joley" },
			{ src: joley5, alt: "Joley" },
			{ src: mygirls2, alt: "Joley and Yoshi" },
			{ src: joley6, alt: "Joley" },
			{ src: yoshi4, alt: "Yoshi" },
			{ src: mygirls, alt: "Joley and Yoshi" },
			{ src: queen, alt: "Joley playing chess" },
		],
		isModalOpen: false,
		currentImage: null,
		isNavOpen: false, // State to control hamburger menu
	};

	openModal = (image) => {
		this.setState({ isModalOpen: true, currentImage: image });
	};

	closeModal = () => {
		this.setState({ isModalOpen: false, currentImage: null });
	};

	toggleNav = () => {
		this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));
	};

	render() {
		const { images, isModalOpen, currentImage } = this.state;

		return (
			<Body>
				<Header />
				<LogoContainer>
					<Logo src={logo} alt="thatSpace logo" />
					<H1>| Gallery</H1>
				</LogoContainer>
				<MainContainer>
					<LeftColumn>
						<Nav />
					</LeftColumn>
					<RightColumn>
						<GalleryWrapper>
							{images.map((image, index) => (
								<GalleryItem
									key={index}
									onClick={() => this.openModal(image.src)}
								>
									<GalleryImage src={image.src} alt={image.alt} />
								</GalleryItem>
							))}
						</GalleryWrapper>
						<Modal
							isOpen={isModalOpen}
							onClose={this.closeModal}
							image={currentImage}
						/>
					</RightColumn>
				</MainContainer>
				<Footer />
			</Body>
		);
	}
}

export default Gallery;

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
	flex: 1;
	width: 100%;
	max-width: 95%;
	margin: 0 auto;
	box-sizing: border-box;

	@media (max-width: 906px) {
		flex-direction: column;
	}
`;

const LogoContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: left;
	color: #f4f4f9;
	border-bottom: 2px solid #f4f4f9;
	padding: 10px;
	margin: 10px;
`;

const Logo = styled.img`
	height: 32px;
	margin: 10px;
	color: #b8dbd9;
`;

const H1 = styled.h1`
	color: #b8dbd9;
`;

const LeftColumn = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);

	@media (max-width: 906px) {
		display: none;
	}
`;

const RightColumn = styled.section`
	flex: 4;
	display: flex;
	flex-direction: column;
	overflow: auto; /* Allow scrolling */
	// flex: 1; /* Allow it to expand and fill available space */
`;

const GalleryWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	padding: 20px;
	margin: 20px;
`;

const GalleryItem = styled.div`
	flex: 1 1 calc(25% - 20px);
	height: 200px;
	background-color: #2f4550;
	border-radius: 8px;
	border: 1px solid #f4f4f9;
	box-shadow: 0 4px 8px rgba(244, 244, 249, 0.1);
	overflow: hidden;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	cursor: pointer;
	position: relative;

	@media (max-width: 1230px) {
		flex: 1 1 calc(33.33% - 20px); /* 3 columns */
	}

	@media (max-width: 900px) {
		flex: 1 1 calc(50% - 20px); /* 2 columns */
	}
`;

const GalleryImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
