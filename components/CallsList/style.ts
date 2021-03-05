import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		padding: 10,
	},
	leftContainer: {
		flexDirection: "row",
	},
	midContainer: {
		justifyContent: "space-around",
	},
	avatar: {
		height: 60,
		width: 60,
		marginRight: 15,
		borderRadius: 50,
	},
	username: {
		fontWeight: "bold",
		fontSize: 16,
	},
	lastCall: {
		fontSize: 16,
		color: "gray",
	},
	time: {
		fontSize: 12,
		color: "gray",
		marginLeft: "auto",
	},
	rightContainer: {
		flexDirection: "row",
		marginLeft: "auto",
		alignItems: "center",
	},
	button: {
		padding: 14,
		borderRadius: 50,
		// backgroundColor: "lightgray",
	},
});

export default styles;
