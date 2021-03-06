import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	container: {
		// flexDirection: "row",
		// width: "100%",
		padding: 10,
	},
	messageBox: {
		backgroundColor: "#e5e5e5",
		borderRadius: 5,
		padding: 10,
	},
	name: {
		color: Colors.light.tint,
		fontWeight: "bold",
		marginBottom: 5,
	},
	time: {
		marginLeft: "auto",
		color: "gray",
	},
	message: {
		// marginVertical: 5,
	},
});

export default styles;
