import {
	FontAwesome5,
	MaterialCommunityIcons,
	Entypo,
	Fontisto,
	MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

const InputBox = () => {
	const [message, setMessage] = useState("");

	const onPress = () => {
		if (!message) {
			console.warn("Recording button has fired");
		} else {
			console.warn("Send button had fired!!");
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<FontAwesome5 name='laugh-beam' size={24} color='gray' />
				<TextInput
					style={styles.TextInput}
					multiline
					value={message}
					onChangeText={setMessage}
					placeholder={"Type a message"}
					// numberOfLines={2}
				/>
				<Entypo
					name='attachment'
					size={24}
					color='gray'
					style={styles.icons}
				/>
				{!message && (
					<Fontisto
						name='camera'
						size={24}
						color='gray'
						style={styles.icons}
					/>
				)}
			</View>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.buttonContainer}>
					{!message ? (
						<MaterialCommunityIcons
							name='microphone'
							size={24}
							color='white'
						/>
					) : (
						<MaterialIcons name='send' size={24} color='white' />
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default InputBox;
