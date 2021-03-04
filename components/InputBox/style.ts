import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
	},
	mainContainer: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 10,
		margin: 10,
		borderRadius: 25,
		// marginRight: 10,
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	buttonContainer: {
		backgroundColor: Colors.light.tint,
		width: 45,
		height: 45,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
		marginRight: 10,
	},
	TextInput: {
		flex: 1,
		marginHorizontal: 20,
		//
	},
	icons: {
		marginHorizontal: 5,
	},
});

export default styles;
