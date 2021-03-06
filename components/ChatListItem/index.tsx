import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Chatroom } from "../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
	chatRoom: Chatroom;
};

const ChatListItem = (props: ChatListItemProps) => {
	const { chatRoom } = props;

	const navigation = useNavigation();

	const user = chatRoom.users[1];
	const onClick = () => {
		//sends id of the chatroom as a 2nd argument!!!!
		navigation.navigate("ChatRoom", {
			id: chatRoom.id,
			name: user.name,
		});
	};

	return (
		<TouchableOpacity onPress={onClick}>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image
						source={{ uri: user.imageUri }}
						style={styles.avatar}
					/>

					<View style={styles.midContainer}>
						<Text style={styles.username}>{user.name}</Text>
						<Text style={styles.lastMessage}>
							{chatRoom.lastMessage.content}
						</Text>
					</View>
				</View>

				{/* <Text style={styles.time}>{chatRoom.lastMessage.createdAt}</Text> */}
				<Text style={styles.time}>
					{moment(chatRoom.lastMessage.createdAt).format(
						"DD/MM/YYYY"
					)}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
export default ChatListItem;
