import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { Fontisto } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/ChatsScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { MainTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import CameraScreen from "../screens/CameraScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";

//Made it to Top Navigator
const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		//Main Navigator on top!!!
		<MainTab.Navigator
			//InialRoute when the application is opened
			initialRouteName='Chats'
			tabBarOptions={{
				activeTintColor: Colors.light.background,
				style: {
					backgroundColor: Colors.light.tint,
				},
				indicatorStyle: {
					backgroundColor: "white",
					height: 4,
				},
				labelStyle: {
					fontWeight: "bold",
				},

				// Usually disabled this option but requires when Icon needs to be shown
				showIcon: true,
			}}
		>
			<MainTab.Screen
				name='Camera'
				component={CameraScreen}
				//Adding logo, and action on the tab

				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name='camera' color={color} size={16} />
					),
					//disable the name of the menu
					tabBarLabel: () => null,
				}}
			/>
			<MainTab.Screen name='Chats' component={ChatsScreen} />
			<MainTab.Screen name='Status' component={StatusScreen} />
			<MainTab.Screen name='Calls' component={CallsScreen} />
		</MainTab.Navigator>
	);
}

//just Icon
function TabBarIcon(props: {
	name: React.ComponentProps<typeof Ionicons>["name"];
	color: string;
}) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen
				name='TabOneScreen'
				component={ChatsScreen}
				options={{ headerTitle: "Tab One Title" }}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name='TabTwoScreen'
				component={TabTwoScreen}
				options={{ headerTitle: "Tab Two Title" }}
			/>
		</TabTwoStack.Navigator>
	);
}
