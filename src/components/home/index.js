import { Feather, MaterialIcons } from "@expo/vector-icons";
import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	where,
} from "firebase/firestore";
import React from "react";
import { ActivityIndicator, FlatList, Pressable, View } from "react-native";
import { db } from "../../../App";
import Text from "../text";
import { styles } from "./styles";

const HomePage = ({ navigation, user }) => {
	const [notes, setNotes] = React.useState([]);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);

		const q = query(collection(db, "notes"), where("uid", "==", user.uid));

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const datas = [];
			querySnapshot.forEach((doc) => {
				datas.push(doc.data());
			});
			setNotes(datas);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const addNote = () => {
		navigation.navigate("Create");
	};

	const handleDelete = async (id) => {
		setLoading(true);
		try {
			await deleteDoc(doc(db, "notes", id));
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	const renderItem = ({ item }) => (
		<Pressable
			style={[styles.note, { backgroundColor: item.color }]}
			onPress={() => navigation.navigate("Edit", { item })}
		>
			<Text style={{ color: "white" }}>{item.title}</Text>
			<Pressable style={{ zIndex: 5 }} onPress={() => handleDelete(item.id)}>
				<MaterialIcons name="delete-forever" size={23} color="white" />
			</Pressable>
		</Pressable>
	);

	if (loading) {
		return (
			<View
				style={[
					{ height: "100%", justifyContent: "center", alignItems: "center" },
				]}
			>
				<ActivityIndicator animating color={"green"} size="large" />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text preset="h3">My Notes</Text>
				<Pressable onPress={addNote}>
					<Feather name="plus-circle" style={styles.plus} />
				</Pressable>
			</View>

			<FlatList
				data={notes}
				renderItem={renderItem}
				keyExtractor={(item, index) => index}
				style={styles.notesContainer}
			/>
		</View>
	);
};

export default HomePage;
