import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import User from "../data/User";
import StatusList from "../components/StatusList";

const StatusScreen = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={User}
				style={{ width: "100%" }}
				renderItem={({ item }) => <StatusList user={item} />}
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
export default StatusScreen;
