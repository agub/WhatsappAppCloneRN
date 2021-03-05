import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Chatroom } from "../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { Calls } from "../../types";
// import {call} "@expo/vector-icons"
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export type ChatListItemProps = {
	calls: Calls;
};

const CallList = (props: ChatListItemProps) => {
	const { calls } = props;

	const navigation = useNavigation();

	const user = calls.users[1];
	const onClick = () => {
		//sends id of the chatroom as a 2nd argument!!!!
		navigation.navigate("ChatRoom", {
			id: calls.id,
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
				</View>
				<View style={styles.midContainer}>
					<Text style={styles.username}>{user.name}</Text>
					<Text style={styles.lastCall}>
						{moment(calls.lastCall.createdAt).fromNow()}
					</Text>
				</View>
				<View style={styles.rightContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() =>
							console.warn(`Calling to ${user.name}.....`)
						}
					>
						<Ionicons
							name='call'
							size={25}
							color={Colors.light.tint}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() =>
							console.warn(`Video Calling to ${user.name}.....`)
						}
					>
						<FontAwesome
							name='video-camera'
							size={25}
							color={Colors.light.tint}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
	);
};
export default CallList;
