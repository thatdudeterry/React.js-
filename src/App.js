import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import ChartDashboard from "./pages/ChartDashboard";
import Messages from "./pages/Messages";
import Newsfeed from "./pages/Newsfeed";
import Settings from "./pages/Settings";
import Friends from "./pages/Friends";
import Gallery from "./pages/Gallery";
import UserProfile from "./pages/UserProfile";

import "./index.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Newsfeed />} />
			<Route path="/messages" element={<Messages />} />
			<Route path="/charts" element={<ChartDashboard />} />
			<Route path="/settings" element={<Settings />} />
			<Route path="/friends" element={<Friends />} />
			<Route path="/gallery" element={<Gallery />} />
			<Route path="/userprofile" element={<UserProfile />} />
		</Routes>
	);
}

export default App;
