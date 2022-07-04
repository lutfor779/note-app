import React from "react";
import { View } from "react-native";
import EditPage from "../components/edit";

const Edit = ({ navigation, user, route }) => {
	return (
		<View>
			<EditPage navigation={navigation} user={user} route={route} />
		</View>
	);
};

export default Edit;
