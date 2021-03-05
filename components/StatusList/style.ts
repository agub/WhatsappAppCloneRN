import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	container: {
		// flexDirection: "row",
		// width: "100%",
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
	status: {
		fontSize: 16,
		color: "gray",
	},
	time: {
		fontSize: 12,
		color: "gray",
		marginLeft: "auto",
	},
});

export default styles;
