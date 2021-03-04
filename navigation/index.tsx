import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View, TouchableOpacity } from "react-native";
import {
	FontAwesome5,
	MaterialCommunityIcons,
	Octicons,
	MaterialIcons,
} from "@expo/vector-icons";
// import { View } from "../components/Themed";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import Colors from "../constants/Colors";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ContactsScreen from "../screens/ContactsScreen";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			//IF COLOR GET WEIRD ENABLE THIS !!

			// theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		//WhatsApp Logo Area:  Top Navigation

		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.light.tint,
					shadowOpacity: 0,
					elevation: 0,
				},
				headerTintColor: Colors.light.background,
				headerTitleAlign: "left",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen
				name='Root'
				//Where MainNavigator placed at
				component={MainTabNavigator}
				options={{
					title: "WhatsApp",
					//styles of Top Navigation including Search logo
					headerRight: () => (
						<View
							style={{
								flexDirection: "row",
								width: 60,
								justifyContent: "space-between",
								marginRight: 10,
							}}
						>
							<Octicons name='search' size={22} color={"white"} />
							<MaterialCommunityIcons
								name='dots-vertical'
								size={22}
								color={"white"}
							/>
						</View>
					),
				}}
			/>

			<Stack.Screen
				name='ChatRoom'
				component={ChatRoomScreen}
				//options can take params which could be used on display name or passing data
				options={({ route }: any) => ({
					title: route.params.name,
					headerRight: () => (
						<View
							style={{
								flexDirection: "row",
								width: 100,
								justifyContent: "space-between",
								marginRight: 10,
							}}
						>
							<TouchableOpacity
								onPress={() =>
									console.warn(
										`Calling to ${route.params.name}.....`
									)
								}
							>
								<MaterialIcons
									name='call'
									size={22}
									color={"white"}
								/>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() =>
									console.warn(
										`Video Calling to ${route.params.name}.....`
									)
								}
							>
								<FontAwesome5
									name='video'
									size={22}
									color={"white"}
								/>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => console.warn(`Options.....`)}
							>
								<MaterialCommunityIcons
									name='dots-vertical'
									size={22}
									color={"white"}
								/>
							</TouchableOpacity>
						</View>
					),
				})}
			/>
			<Stack.Screen name='Contacts' component={ContactsScreen} />
			<Stack.Screen
				name='NotFound'
				component={NotFoundScreen}
				options={{ title: "Opppss" }}
			/>
		</Stack.Navigator>
	);
}
