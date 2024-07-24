import React from "react";
import {
	RadialBarChart,
	RadialBar,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "Age: 18-24", uv: 12757, fill: "#2F4550" },
	{ name: "Age: 25-29", uv: 25327, fill: "#586F7C" },
	{ name: "Age: 30-34", uv: 33169, fill: "#2F4550" },
	{ name: "Age: 35-39", uv: 33182, fill: "#586F7C" },
	{ name: "Age: 40-49", uv: 29183, fill: "#2F4550" },
	{ name: "Age: 50-59", uv: 11263, fill: "#586F7C" },
	{ name: "Age: 60+ ", uv: 11667, fill: "#2F4550" },
];

const SimpleRadialBarChart = () => {
	return (
		<div style={styles.chartContainer}>
			<h1 style={styles.header}>Wins by Age Comparison</h1>
			<ResponsiveContainer width="100%" height={400}>
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="20%"
					outerRadius="80%"
					barSize={10}
					data={data}
				>
					<RadialBar
						minAngle={15}
						label={{ position: "insideStart", fill: "#F4F4F9" }}
						background
						clockWise
						dataKey="uv"
						marginRight="20px"
					/>
					<Legend
						style={styles.legendContainer}
						iconSize={10}
						layout="vertical"
						verticalAlign="middle"
						wrapperStyle={{
							top: "40%",
							right: 0,
							transform: "translate(0, -50%)",
							lineHeight: "24px",
						}}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
};

const styles = {
	chartContainer: {
		border: "2px solid #2F4550",
		boxShadow:
			"0 4px 8px rgba(244, 244, 249, 0.1),  0 6px 12px 0 rgba(244, 244, 249, 0.2)",
		padding: "20px",
		borderRadius: "8px",
		backgroundColor: "#B8DBD9",
		color: "#2F4550",
		margin: "18px",
	},

	header: {
		fontSize: "1.5rem",
		margin: "10px",
	},

	legendContainer: {
		color: "#F4F4F9",
		fontFamily: "Urbanist",
	},
};

export default SimpleRadialBarChart;
