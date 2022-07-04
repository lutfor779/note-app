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
		width: 150,
		height: 45,
		backgroundColor: colors.yellow,
		alignItems: "center",
		justifyContent: "center",
	},
	select: {
		marginVertical: 15,
	},
	radioContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	outerCircle: {
		height: 30,
		width: 30,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: colors.lightGray,
		alignItems: "center",
		justifyContent: "center",
	},
	innerCircle: {
		height: 15,
		width: 15,
		borderRadius: 7.5,
		borderWidth: 1,
		borderColor: colors.lightGray,
	},
	radioText: {
		marginLeft: 5,
	},
	selectedOuterCircle: {
		borderColor: "orange",
	},
	selectedInnerCircle: {
		backgroundColor: "orange",
		borderColor: "orange",
	},
	footer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		paddingBottom: 30,
	},
});
