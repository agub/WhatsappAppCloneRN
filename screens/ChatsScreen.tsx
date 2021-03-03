import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { FlatList } from "react-native";

import { View } from "../components/Themed";
import ChatListitem from "../components/ChatListItem";
import ChatRooms from "../data/ChatRooms";

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			{/* <ChatListitem chatRoom={ChatRooms[0]} /> */}

			<FlatList
				data={ChatRooms}
				style={{ width: "100%" }}
				renderItem={({ item }) => <ChatListitem chatRoom={item} />}
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
