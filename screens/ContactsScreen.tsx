import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ContactListItem from "../components/ContactListItem";
import { useRoute } from "@react-navigation/native";
import User from "../data/User";

export default function ContactsScreen() {
	const route = useRoute();
	return (
		<View style={styles.container}>
			<FlatList
				data={User}
				style={{ width: "100%" }}
				renderItem={({ item }) => <ContactListItem user={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
});
