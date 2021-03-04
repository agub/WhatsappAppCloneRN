import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";

import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import ChatRoomData from "../data/Chats";
import bg from "../assets/images/BG.png";
import InputBox from "../components/InputBox";
// interface Props {}

const ChatRoomScreen = () => {
	const route = useRoute();

	return (
		<ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
			<FlatList
				//FlatList data has to be Array
				data={ChatRoomData.messages}
				renderItem={({ item }) => <ChatMessage message={item} />}
			/>
			<InputBox />
		</ImageBackground>
	);
};

export default ChatRoomScreen;
