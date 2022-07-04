import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { ActivityIndicator, Pressable, TextInput, View } from "react-native";
import { db } from "../../../App";
import Text from "../text";
import { styles } from "./styles";

const noteColorOptions = ["red", "blue", "green"];

const EditPage = ({ navigation, user, route }) => {
	const oldData = route.params.item;
	const [loading, setLoading] = React.useState(false);
	const [selected, setSelected] = React.useState(oldData.color);

	const [title, setTitle] = React.useState(oldData.title);
	const [description, setDescription] = React.useState(oldData.description);
	const [noteColor, setNoteColor] = React.useState(oldData.color);

	const onSubmit = async () => {
		setLoading(true);
		try {
			const docRef = doc(db, "notes", oldData.id);
			await updateDoc(docRef, {
				title,
				description,
				color: noteColor,
				uid: user.uid,
				id: oldData.id,
			});

			setLoading(false);
			console.log("Document updated");
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
				<Text preset="h3">Edit your note</Text>
			</View>
			<View>
				<TextInput
					placeholder="Title"
					style={styles.input}
					keyboardType="default"
					autoCapitalize="word"
					onChangeText={(text) => setTitle(text)}
					defaultValue={oldData.title}
				/>
				<TextInput
					placeholder="Description"
					style={styles.input}
					keyboardType="default"
					autoCapitalize="sentences"
					onChangeText={(text) => setDescription(text)}
					multiline
					defaultValue={oldData.description}
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

export default EditPage;
