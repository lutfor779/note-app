import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import {
	ActivityIndicator,
	Image,
	Pressable,
	TextInput,
	View,
} from "react-native";
import { auth } from "../../../App";
import Text from "../text";
import { styles } from "./styles";

const LoginPage = ({ navigation }) => {
	const [loading, setLoading] = React.useState(false);
	const [email, setEmail] = React.useState(null);
	const [password, setPassword] = React.useState(null);

	const login = async () => {
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator animating color={"green"} size="large" />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Image source={require("../../../assets/login.png")} style={styles.img} />
			<Text preset="h3" style={styles.top}>
				Never forget your notes
			</Text>
			<View>
				<TextInput
					placeholder="Email"
					style={styles.input}
					keyboardType="email-address"
					autoCapitalize="none"
					onChangeText={(text) => setEmail(text)}
				/>
			</View>
			<View>
				<TextInput
					placeholder="Password"
					secureTextEntry
					style={styles.input}
					onChangeText={(text) => setPassword(text)}
				/>
			</View>

			<View style={styles.footer}>
				<View style={styles.buttonContainer}>
					<Pressable style={styles.button} onPress={login}>
						<Text preset="button">Login</Text>
					</Pressable>
				</View>
				<Pressable
					onPress={() => {
						navigation.navigate("Signup");
					}}
				>
					<Text>
						Don't have an account? <Text style={styles.link}>SignUp</Text>{" "}
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default LoginPage;
