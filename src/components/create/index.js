import { collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import { ActivityIndicator, Pressable, TextInput, View } from "react-native";
import { db } from "../../../App";
import Text from "../text";
import { styles } from "./styles";

const noteColorOptions = ["red", "blue", "green"];

const CreatePage = ({ navigation, user }) => {
	const [loading, setLoading] = React.useState(false);
	const [selected, setSelected] = React.useState("blue");

	const [title, setTitle] = React.useState(null);
	const [description, setDescription] = React.useState(null);
	const [noteColor, setNoteColor] = React.useState("blue");

	const onSubmit = async () => {
		setLoading(true);
		try {
			const docRef = await doc(collection(db, "notes"));

			await setDoc(docRef, {
				title,
				description,
				color: noteColor,
				uid: user.uid,
				id: docRef.id,
			});

			setLoading(false);
			console.log("Document written with ID: ", docRef.id);
			navigation.goBack();
		} catch (e) {
			setLoading(false);
			console.log("Error adding document: ", e);
		}
	};

	if (loading) {
		return (
			<View
				style={[
					styles.container,
					{ justifyContent: "center", alignItems: "center" },
				]}
			>
				<ActivityIndicator animating color={"green"} size="large" />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text preset="h3">Create your note</Text>
			</View>
			<View>
				<TextInput
					placeholder="Title"
					style={styles.input}
					keyboardType="default"
					autoCapitalize="word"
					onChangeText={(text) => setTitle(text)}
				/>
				<TextInput
					placeholder="Description"
					style={styles.input}
					keyboardType="default"
					autoCapitalize="sentences"
					onChangeText={(text) => setDescription(text)}
					multiline
				/>
			</View>
			<View>
				<Text style={styles.select}>Select theme color</Text>

				{noteColorOptions.map((item) => (
					<Pressable
						style={styles.radioContainer}
						onPress={() => {
							setSelected(item);
							setNoteColor(item);
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
					<Pressable style={styles.button} onPress={onSubmit}>
						<Text preset="button">Submit</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default CreatePage;
