import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { auth, db } from "../../../App";
import Text from "../text";
import { styles } from "./styles";

const gender = ["Male", "Female", "Other"];

const SignupPage = ({ navigation }) => {
	const [loading, setLoading] = React.useState(false);
	const [selected, setSelected] = useState(null);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [age, setAge] = useState(null);
	const [gndr, setGender] = useState(null);

	const signup = async () => {
		setLoading(true);
		try {
			const result = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const docRef = await addDoc(collection(db, "users"), {
				name,
				email,
				password,
				age,
				gndr,
				uid: result.user.uid,
			});
			setLoading(false);
			console.log("Document written with ID: ", docRef.id);
		} catch (error) {
			console.log("error found: ", error);
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
			<View>
				<TextInput
					placeholder="Full Name"
					style={styles.input}
					onChangeText={(text) => setName(text)}
					autoCapitalize="words"
					autoCorrect
				/>
			</View>
			<View>
				<TextInput
					placeholder="Email"
					style={styles.input}
					keyboardType="email-address"
					onChangeText={(text) => setEmail(text)}
					autoCorrect
					autoCapitalize="none"
					autoComplete="email"
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

			<View>
				<TextInput
					placeholder="Age"
					style={styles.input}
					keyboardType="number-pad"
					onChangeText={(text) => setAge(text)}
				/>
			</View>

			<View>
				<Text style={styles.select}>Select Gender</Text>
				{gender.map((item) => (
					<Pressable
						style={styles.radioContainer}
						onPress={() => {
							setSelected(item);
							setGender(item);
						}}
						key={item}
					>
						<View
							style={[
								styles.outerCircle,
								selected === item && styles.selectedOuterCircle,
							]}
						>
							<View
								style={[
									styles.innerCircle,
									selected === item && styles.selectedInnerCircle,
								]}
							/>
						</View>
						<Text style={styles.radioText}>{item}</Text>
					</Pressable>
				))}
			</View>

			<View style={styles.footer}>
				<View style={styles.buttonContainer}>
					<Pressable style={styles.button} onPress={signup}>
						<Text preset="button">Sign up</Text>
					</Pressable>
				</View>
				<Pressable
					onPress={() => {
						navigation.navigate("Login");
					}}
				>
					<Text>
						Already have an account? <Text style={styles.link}>Login</Text>
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default SignupPage;
