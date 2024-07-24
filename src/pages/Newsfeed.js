import React, { Component } from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Nav from "../components/Nav";
import AdCards from "../components/AdCards";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import JoleyAvatar from "../components/JoleyAvatar";
import Avatar from "../components/Avatar";
import Form from "../components/Form";

// Images
import logo from "../images/logo-no-background.png";
import BelAir from "../images/freshprince.jpg";
import Pharcyde from "../images/pharcyde.jpg";
import FortySix from "../images/fortySix.jpeg";
import Racquetball from "../images/racquetball.jpeg";
import GoingMerry from "../images/goingmerry.jpg";
import Jellybean from "../images/jellybean.jpeg";
import Facebook from "../images/facebook.png";
import Instagram from "../images/Instagram.jpg";
import TikTok from "../images/tiktok.jpg";

class Newsfeed extends Component {
	state = {
		posts: [
			{
				id: 0,
				postUserAvatar: <Avatar />,
				postUserName: "Terry Biesboer",
				postTitle: "What a day",
				postDesc:
					"In West Philadelphia born and raised On the playground was where I spent most of my days Chillin' out, maxin', relaxin', all cool And all shootin' some b-ball outside of the school, When a couple of guys who were up to no good. Started making trouble in my neighborhood. I got in one little fight and my mom got scared She said, 'You're movin' with your auntie and uncle in Bel-Air'",
				postImageAlt: "If you know, you know",
				postImage: BelAir,
			},
			{
				id: 1,
				postUserAvatar: <JoleyAvatar />,
				postUserName: "Jellybean Swagalicious",
				postTitle: "It's DONE!",
				postDesc:
					"I got this Gyrados set for my birthday this year. I have been working on it off and on with my dad, these lego sets have always been something I've enjoyed doing together. And here it is, finished!",
				postImageAlt: "Joley holding her completed Gyrados lego set.",
				postImage: Jellybean,
			},
			{
				id: 2,
				postUserAvatar: <Avatar />,
				postUserName: "Terry Biesboer",
				postTitle: "One of my FAVE songs!",
				postDesc:
					"Now in my younger days I used to sport a shag, When I went to school I carried lunch in a bag, With an apple for my teacher 'cause I knew I'd get a kiss, Always got mad when the class was dismissed, But when it was in session, I always had a question, I would raise my hand to make her stagger to my desk and, Help me with my problem, it was never much, Just a trick, to smell her scent and try to sneak a touch, Oh, how I wish I could hold her hand and give her a hug, She was married to the man, he was a thug, His name was Lee, he drove a Z, He'd pick her up from school promptly at three o'clock, I was on her jock, yes indeedy, I wrote graffiti on the bus, First I'd write her name then carve a plus, With my name last, on the looking glass, I seen her yesterday but still I had to let her pass, She keeps on passing me by, She keeps on passing me by, Nevertheless, I'll say it again)",
				postImageAlt: "Lyrics to Passin' me by, performed by The Pharcyde.",
				postImage: Pharcyde,
			},
			{
				id: 3,
				postUserAvatar: <Avatar />,
				postUserName: "Terry Biesboer",
				postTitle: "Birthday!",
				postDesc:
					"Happy birthday to me. Happy birthday to me. Happy birthday. Happy birthday. Happy birthday to me. Happy birthday to me. Happy birthday to me. Happy birthday. Happy birthday. Well another year has come and gone",
				postImageAlt: "My 46th birthday cake with 46 in candled numbers.",
				postImage: FortySix,
			},
			{
				id: 4,
				postUserAvatar: <JoleyAvatar />,
				postUserName: "Jellybean Swagalicious",
				postTitle: "Racquetball",
				postDesc:
					"I'm really excited for the upcoming racquetball season this year! This will be my third year playing, and I'm looking forward to going to Nationals later this school year",
				postImageAlt: "Me and Theresa after our Doubles tournament",
				postImage: Racquetball,
			},
			{
				id: 5,
				postUserAvatar: <JoleyAvatar />,
				postUserName: "Jellybean Swagalicious",
				postTitle: "Going Merry from One Piece in Minecraft!",
				postDesc:
					"I found this great video tutorial on YouTube, took a few days in survival to gather all the supplies, but I'm stoked how it came out!",
				postImageAlt: "Screenshot of my GoingMerry build in Minecraft",
				postImage: GoingMerry,
			},
		],
		ads: [
			{
				adsTitle: "Facebook",
				adsImage: Facebook,
				adsImageAlt: "facebook image",
				adsContent: "Join today",
				adsParagraph:
					"Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
			},
			{
				adsTitle: "Instagram",
				adsImage: Instagram,
				adsImageAlt: "instagram image",
				adsContent: "Share your story",
				adsParagraph:
					"Instagram is a free photo and video sharing app that allows you to upload photos or videos.",
			},
			{
				adsTitle: "TikTok",
				adsImage: TikTok,
				adsImageAlt: "",
				adsContent: "Make someone smile today",
				adsParagraph:
					"TikTok is a fun app that allows teens to create and share videos with their friends. Since the early days of social media (in particular on YouTube",
			},
		],
		isEditing: false,
		postToEdit: null,
		transitionOverlay: {},
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.posts.length !== this.state.posts.length ||
			prevState.isEditing !== this.state.isEditing
		) {
			const updatedOverlay = {};
			const newPostIndex = this.state.posts.length - 1;
			const updatedIndex =
				this.state.isEditing !== null ? this.state.isEditing : newPostIndex;

			updatedOverlay[updatedIndex] = true;

			this.setState({ transitionOverlay: updatedOverlay }, () => {
				setTimeout(() => {
					console.log("componentDidUpdate did launch");
					this.setState((prevState) => {
						const updatedOverlay = { ...prevState.transitionOverlay };
						delete updatedOverlay[updatedIndex];
						return { transitionOverlay: updatedOverlay };
					});
				}, 4200);
				console.log("componentDidUpdate timeout ran");
			});
		}
	}

	componentDidMount() {
		console.log("Component mounted. Initial state:", this.state.posts);
		// !! Working in console after post
	}

	addPost = (newPost) => {
		this.setState(
			(prevState) => ({
				posts: [newPost, ...prevState.posts],
				transitionOverlay: {
					0: true, //!! Apply overlay to the new post not working
				},
			}),
			() => {
				console.log(
					"Added post, transitionOverlay:",
					this.state.transitionOverlay
				);
				setTimeout(() => {
					this.setState((prevState) => {
						const updatedOverlay = { ...prevState.transitionOverlay };
						delete updatedOverlay[0];
						console.log(
							// !! Gets to here in console
							"Cleared overlay for post , updatedOverlay:",
							updatedOverlay
						);

						return { transitionOverlay: updatedOverlay };
					});
				}, 7500);
			}
		);
	};

	deletePost = (id) => {
		this.setState((prevState) => {
			const updatedPosts = prevState.posts.filter((post) => post.id !== id);
			console.log("Post deleted");
			return { posts: updatedPosts };
		});
	};

	editItem = (id) => {
		const postToEdit = this.state.posts.find((post) => post.id === id);
		this.setState({ isEditing: id, postToEdit });
		console.log("Post edited");
	};

	handleInputChange = (event) => {
		this.setState({ editValue: event.target.value });
	};

	saveItem = (id, updatedPost) => {
		this.setState((prevState) => {
			const updatedPosts = prevState.posts.map((post) =>
				post.id === id ? updatedPost : post
			);
			console.log("Post saved");
			return { posts: updatedPosts, isEditing: false };
		});
	};

	cancelEdit = () => {
		console.log("Edit cancelled");
		this.setState({ isEditing: false, postToEdit: null });
	};

	render() {
		const { posts, ads, isEditing, transitionOverlay } = this.state;

		return (
			<Body>
				<Header />
				<LogoContainer>
					<Logo src={logo} alt="thatSpace logo" />
					<Title>| Newsfeed</Title>
				</LogoContainer>
				<Container>
					<LeftColumn>
						<Nav />
					</LeftColumn>
					<MiddleColumn>
						<PostList>
							<Form addPost={this.addPost} postToEdit={this.state.postToEdit} />
							{posts.map((post) => (
								<PostCard
									key={post.id}
									posts={post}
									onEdit={() => this.editItem(post.id)}
									onDelete={() => this.deletePost(post.id)}
									isEditing={isEditing === post.id}
									onSave={this.saveItem}
									onCancel={this.cancelEdit}
									style={{
										position: "relative",
										overflow: "hidden",
										transition: "background-color 7.5s",
										backgroundColor: transitionOverlay[post.id]
											? "#F4F4F9"
											: "transparent",
										color: transitionOverlay[post.id] ? "black" : "inherit",
										opacity: transitionOverlay[post.id] ? 0.8 : 1,
									}}
								/>
							))}
						</PostList>
					</MiddleColumn>

					<RightColumn>
						<AdsHeader>Advertisements</AdsHeader>
						{ads.map((element, index) => (
							<AdCards key={index} val={element} />
						))}
					</RightColumn>
				</Container>
				<Footer />
			</Body>
		);
	}
}

export default Newsfeed;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #586f7c;
	height: 100%;
	width: 100%;
	overflow-x: hidden;
`;

const Container = styled.main`
	background-color: #586f7c;
	display: flex;
	flex-direction: row;
	min-height: 100vh;
	width: 100%;
	max-width: 95%;
	margin: 0 auto;
	overflow-x: hidden;
`;

const LogoContainer = styled.span`
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
	margin-right: 10px;
	color: #b8dbd9;
`;

const Title = styled.h1`
	color: #b8dbd9;
`;

const AdsHeader = styled.h2`
	display: flex;
	flex-direction: column;
	font-size: 0.75rem;
	align-items: center;
	justify-content: space-around;
	color: #f4f4f9;
	margin-top: 20px;
`;

const LeftColumn = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);
`;

const MiddleColumn = styled.section`
	flex: 4;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: auto;
`;

const RightColumn = styled.aside`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);
	@media (max-width: 1000px) {
		display: none;
	}
`;

const PostList = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;
