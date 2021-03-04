import React from "react";
import { View, Text, Image } from "react-native";
import { User } from "../../types";

import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export type ContactListItemProps = {
	user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
	const { user } = props;

	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("Contacts");
	};
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<Image source={{ uri: user.imageUri }} style={styles.avatar} />

				<View style={styles.midContainer}>
					<Text style={styles.username}>{user.name}</Text>
					<Text style={styles.status}>{user?.status}</Text>
				</View>
			</View>
		</View>
	);
};

export default ContactListItem;
