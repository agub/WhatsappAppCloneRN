import React from "react";
import { View, Text, Image } from "react-native";
import { Chatroom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
	chatRoom: Chatroom;
};

const ChatListItem = (props: ChatListItemProps) => {
	const { chatRoom } = props;

	const user = chatRoom.users[0];

	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<Image source={{ uri: user.imageUri }} style={styles.avatar} />

				<View style={styles.midContainer}>
					<Text style={styles.username}>{user.name}</Text>
					<Text>{chatRoom.lastMessage.content}</Text>
				</View>
			</View>

			{/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
			<Text>Yesterday</Text>
		</View>
	);
};
export default ChatListItem;
