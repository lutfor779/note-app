import React from "react";
import { View } from "react-native";
import LoginPage from "../components/login";

const Login = ({ navigation }) => {
	return (
		<View>
			<LoginPage navigation={navigation} />
		</View>
	);
};

export default Login;
