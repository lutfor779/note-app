import React from "react";
import { SafeAreaView, View } from "react-native";
import HomePage from "../components/home";

const Home = ({ navigation, user }) => {
	return (
		<SafeAreaView>
			<View>
				<HomePage navigation={navigation} user={user} />
			</View>
		</SafeAreaView>
	);
};

export default Home;
