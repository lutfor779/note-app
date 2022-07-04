import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		height: "100%",
		paddingHorizontal: 16,
	},
	img: {
		height: 300,
		width: "100%",
	},
	top: {
		textAlign: "center",
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: "black",
		height: 48,
		marginBottom: 16,
	},
	buttonContainer: {
		alignItems: "center",
		marginBottom: 16,
	},
	button: {
		borderRadius: 30,
		width: 165,
		height: 45,
		backgroundColor: colors.yellow,
		alignItems: "center",
		justifyContent: "center",
	},
	footer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		paddingBottom: 30,
	},
	link: {
		color: colors.green,
		fontWeight: "bold",
	},
});
