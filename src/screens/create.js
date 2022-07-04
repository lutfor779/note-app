import React from "react";
import { View } from "react-native";
import CreatePage from "../components/create";

const Create = ({ navigation, user }) => {
	return (
		<View>
			<CreatePage navigation={navigation} user={user} />
		</View>
	);
};

export default Create;
