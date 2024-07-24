import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ReferenceLine,
	ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const data = [
	{ name: "Sunday", Current: 4000, Previous: 2404 },
	{ name: "Monday", Current: -3000, Previous: 1398 },
	{ name: "Tuesday", Current: -2000, Previous: -1779 },
	{ name: "Wednesday", Current: 2780, Previous: 3908 },
	{ name: "Thursday", Current: -1890, Previous: 4836 },
	{ name: "Friday", Current: 2390, Previous: -3867 },
	{ name: "Saturday", Current: 3490, Previous: 429 },
];

const PositiveAndNegativeBarChart = () => {
	return (
		<ChartContainer>
			<Header>Losses by Week Over Previous Week</Header>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart
					data={data}
					margin={{ top: 50, right: 5, left: 5, bottom: 50 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip backgroundColor="#586F7C" color="#F4F4F9" />
					<Legend marginTop="10px" />
					<ReferenceLine y={0} stroke="#2F4550" />
					<Bar dataKey="Previous" fill="#2F4550" />
					<Bar dataKey="Current" fill="#586F7C" />
				</BarChart>
			</ResponsiveContainer>
		</ChartContainer>
	);
};

export default PositiveAndNegativeBarChart;

// Styled Components
const ChartContainer = styled.div`
	border: 2px solid #2f4550;
	box-shadow: 0 4px 8px rgba(244, 244, 249, 0.1),
		0 6px 12px 0 rgba(244, 244, 249, 0.2);
	padding: 20px;
	border-radius: 8px;
	background-color: #b8dbd9;
	color: #2f4550;
	margin: 18px;
`;

const Header = styled.h1`
	font-size: 1.5rem;
	margin: 10px;
	padding: 10px;
	color: #2f4550;
`;
