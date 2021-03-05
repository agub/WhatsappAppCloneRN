import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Calls from "../data/Calls";

import CallsList from "../components/CallsList";

const CallsScreen = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={Calls}
				style={{ width: "100%" }}
				renderItem={({ item }) => <CallsList calls={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
});
export default CallsScreen;
