import React, { useState } from "react";

// Components
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Charts
import PositiveAndNegativeBarChart from "../components/charts/PositiveAndNegativeBarChart";
import PositiveAndNegativeBarChartTwo from "../components/charts/PositiveAndNegativeBarChartTwo";
import SimpleRadialBarChart from "../components/charts/SimpleRadialBarChart";
import SimpleRadialBarChartTwo from "../components/charts/SimpleRadialBarChartTwo";

// Images
import logo from "../images/logo-no-background.png";

import styled from "styled-components";

function ChartDashboard() {
	const [simpleRadialBarChart] = useState([{ chartHeader: "Overview" }]);
	const [simpleRadialBarChartTwo] = useState([{ chartHeader: "Overview" }]);
	const [positiveAndNegativeBarChart] = useState([{ chartHeader: "Overview" }]);
	const [positiveAndNegativeBarChartTwo] = useState([
		{ chartHeader: "Overview" },
	]);

	return (
		<Body>
			<Header />
			<LogoContainer>
				<Logo src={logo} alt="thatSpace logo" />
				<Heading>| Charts</Heading>
			</LogoContainer>
			<Container>
				<LeftColumn>
					<Nav />
				</LeftColumn>
				<RightColumn>
					<ChartsGrid>
						<ChartContainer>
							{simpleRadialBarChart.map((chart, id) => (
								<SimpleRadialBarChart
									key={id}
									id={id}
									simpleRadialBarChart={chart}
								/>
							))}
						</ChartContainer>
						<ChartContainer>
							{simpleRadialBarChartTwo.map((chart, id) => (
								<SimpleRadialBarChartTwo
									key={id}
									id={id}
									simpleRadialBarChartTwo={chart}
								/>
							))}
						</ChartContainer>
						<ChartContainer>
							{positiveAndNegativeBarChart.map((chart, id) => (
								<PositiveAndNegativeBarChart
									key={id}
									id={id}
									positiveAndNegativeBarChart={chart}
								/>
							))}
						</ChartContainer>
						<ChartContainer>
							{positiveAndNegativeBarChartTwo.map((chart, id) => (
								<PositiveAndNegativeBarChartTwo
									key={id}
									id={id}
									positiveAndNegativeBarChartTwo={chart}
								/>
							))}
						</ChartContainer>
					</ChartsGrid>
				</RightColumn>
			</Container>
			<Footer />
		</Body>
	);
}

export default ChartDashboard;

// Styled Components
const Body = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #586f7c;
	min-height: 100vh;
`;

const Container = styled.div`
	background-color: #586f7c;
	display: flex;
	flex-direction: row;
	min-height: 100vh;
	width: 100%;
	max-width: 95%;
	margin: 0 auto;
	box-sizing: border-box;
`;

const LogoContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
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

const Heading = styled.h1`
	color: #b8dbd9;
`;

const LeftColumn = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);
`;

const RightColumn = styled.section`
	flex: 4;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);
`;

const ChartsGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: space-between;
`;

const ChartContainer = styled.div`
	flex: 1 1 calc(50% - 20px);
	border-radius: 8px;
`;
