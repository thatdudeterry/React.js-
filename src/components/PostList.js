import React from "react";
import PostCard from "./PostCard";

// No known issues

const PostList = ({ posts }) => {
	return (
		<section>
			<div>
				{posts.map((post, index) => (
					<PostCard key={post.id} val={post} />
				))}
			</div>
		</section>
	);
};

export default PostList;
