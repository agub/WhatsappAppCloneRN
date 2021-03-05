import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CameraFunction from "../components/CameraFunction";
import Colors from "../constants/Colors";
import { useIsFocused } from "@react-navigation/core";

export default function CameraScreen() {
	// const [on, setOn] = React.useState(false);
	const isFocused = useIsFocused();
	return (
		<View style={styles.container}>
			{/* <View style={styles.button}>
				<Button
					title={on ? "Disable the Camara" : "Enable the Camera"}
					onPress={() => setOn(!on)}
					color='white'
				/>
			</View> */}

			{/* enable when this is focused */}
			{isFocused ? (
				<View style={styles.container}>
					<CameraFunction />
				</View>
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		position: "relative",
		alignItems: "center",
	},
	camera: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	// button: {
	// 	position: "absolute",
	// 	paddingHorizontal: 20,
	// 	margin: 20,
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	backgroundColor: Colors.light.tint,
	// 	borderRadius: 10,
	// 	zIndex: 100,
	// },
});
