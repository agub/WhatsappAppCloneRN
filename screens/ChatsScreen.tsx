import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import ChatListitem from "../components/ChatListItem";
import ChatRooms from "../data/ChatRooms";

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<ChatListitem chatRoom={ChatRooms[0]} />
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
