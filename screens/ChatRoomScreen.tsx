import React, { useRef } from "react";
import {
	View,
	Text,
	FlatList,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	TextInput,
} from "react-native";

import KeyboardSpacer from "react-native-keyboard-spacer";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import ChatRoomData from "../data/Chats";
import bg from "../assets/images/BG.png";
import InputBox from "../components/InputBox";
import styles from "../components/ChatListItem/style";
// interface Props {}

const ChatRoomScreen = () => {
	const route = useRoute();

	const flatList = useRef();
	return (
		<ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
			<FlatList
				//FlatList data has to be Array
				data={ChatRoomData.messages}
				renderItem={({ item }) => <ChatMessage message={item} />}
			/>
			<InputBox />
			<KeyboardSpacer />
		</ImageBackground>
	);
};

export default ChatRoomScreen;
