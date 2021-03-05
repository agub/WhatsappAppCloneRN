import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { User } from "../../types";

import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export type ContactListItemProps = {
	user: User;
};

const StatusList = (props: ContactListItemProps) => {
	const { user } = props;

	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("ChatRoom", { id: user.id, name: user.name });
	};
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image
						source={{ uri: user.imageUri }}
						style={styles.avatar}
					/>

					<View style={styles.midContainer}>
						<Text style={styles.username}>{user.name}</Text>
						<Text style={styles.status}>{user?.status}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default StatusList;
