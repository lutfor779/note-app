import { colors } from "../theme/colors";

const BASE = {
	fontSize: 17,
};

const TITLE = {
	fontSize: 30,
	fontWeight: "700",
	color: colors.black,
};

const SUBTITLE = {
	fontSize: 22,
	fontWeight: "700",
	color: colors.black,
};

export const presets = {
	default: {
		...BASE,
		color: colors.black,
		fontWeight: "500",
	},
	h1: TITLE,

	h3: SUBTITLE,

	p: {
		...BASE,
		color: colors.lightGray,
		fontWeight: "400",
	},
	span: {
		...BASE,
		color: colors.white,
		fontWeight: "500",
	},
	button: {
		...BASE,
		fontWeight: "500",
		textAlign: "center",
	},
};
