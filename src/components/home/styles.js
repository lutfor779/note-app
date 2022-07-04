import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		paddingHorizontal: 16,
		height: "100%",
	},
	top: {
		paddingTop: 10,
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	plus: {
		fontSize: 26,
		color: colors.black,
		fontWeight: 700,
	},
	notesContainer: {
		paddingTop: 20,
	},
	note: {
		borderRadius: 25,
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginTop: 20,
		color: colors.white,
		justifyContent: "space-between",
		flexDirection: "row",
	},
});
