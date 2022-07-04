import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import Create from "./src/screens/create";
import Edit from "./src/screens/edit";
import Home from "./src/screens/home";
import Login from "./src/screens/login";
import Signup from "./src/screens/signup";
import { colors } from "./src/theme/colors";

const firebaseConfig = {
	apiKey: "AIzaSyAF_PyEqozrn7kd1x25Mku8prk1bvZK7RQ",
	authDomain: "aac-note-app-f532f.firebaseapp.com",
	projectId: "aac-note-app-f532f",
	storageBucket: "aac-note-app-f532f.appspot.com",
	messagingSenderId: "693786222990",
	appId: "1:693786222990:web:1ea726808b6468225b04df",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const Stack = createNativeStackNavigator();

const CustomTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "#fff",
	},
};

export default function App() {
	const [user, setUser] = React.useState(null);
	const [loading, setLoading] = React.useState(true);

	// React.useEffect(() => {
	// 	signOut(auth);
	// });

	React.useEffect(() => {
		const authSubscription = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setLoading(false);
			} else {
				setUser(null);
				setLoading(false);
			}
		});

		return authSubscription;
	}, []);

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator animating color={"green"} size="large" />
			</View>
		);
	}

	return (
		<NavigationContainer theme={CustomTheme}>
			<Stack.Navigator>
				{user ? (
					<>
						<Stack.Screen name="Home" options={{ headerShown: false }}>
							{(props) => <Home {...props} user={user} />}
						</Stack.Screen>

						<Stack.Screen name="Create" options={{ headerShown: false }}>
							{(props) => <Create {...props} user={user} />}
						</Stack.Screen>

						<Stack.Screen name="Edit" options={{ headerShown: false }}>
							{(props) => <Edit {...props} user={user} />}
						</Stack.Screen>
					</>
				) : (
					<>
						<Stack.Screen
							name="Login"
							component={Login}
							options={{ headerShown: false }}
						/>

						<Stack.Screen
							name="Signup"
							component={Signup}
							options={{ headerShown: false }}
						/>
					</>
				)}
			</Stack.Navigator>
			<StatusBar
				animated
				backgroundColor={colors.green}
				barStyle={"light-content"}
			/>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
