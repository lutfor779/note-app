import React from "react";
import { View } from "react-native";
import SignupPage from "../components/signup";

const Signup = ({ navigation }) => {
	return (
		<View>
			<SignupPage navigation={navigation} />
		</View>
	);
};

export default Signup;
