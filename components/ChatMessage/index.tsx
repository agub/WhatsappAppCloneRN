import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types";
import moment from "moment";
import styles from "./style";

export type ChatMessageProps = {
	message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
	const { message } = props;

	//conditional statement for checking if the message is from u1 or u2
	const isMyMessage = () => {
		return message.user?.id === "u1";
	};
	return (
		<View style={styles.container}>
			<View
				//If message is from u1 color will change.
				style={[
					styles.messageBox,
					{
						backgroundColor: isMyMessage() ? "#e5fcd1" : "white",
						marginLeft: isMyMessage() ? 50 : 0,
						marginRight: isMyMessage() ? 0 : 50,
					},
				]}
			>
				{!isMyMessage() && (
					<Text style={styles.name}>{message.user?.name}</Text>
				)}
				<Text style={styles.message}>{message.content}</Text>
				<Text style={styles.time}>
					{moment(message.createdAt).fromNow()}
				</Text>
			</View>
		</View>
	);
};

export default ChatMessage;
