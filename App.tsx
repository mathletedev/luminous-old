import { FlatList, StatusBar, View } from "react-native";
import { Item } from "./src/Item";
import { FC, useState } from "react";

const App: FC = () => {
	const [items, setItems] = useState([
		{ done: false, contents: "First Item" },
		{ done: true, contents: "Second Item" },
		{ done: true, contents: "Third Item" },
		{
			done: false,
			contents: "fdsafdasfdsafdsafdsafdsafdsafsdafsadfsdafdsfdsafdasfdsaa"
		}
	]);

	const toggle = (index: number) => {
		let copy = items;
		copy[index].done = !copy[index].done;

		setItems(copy
		);
		const a = 0;
	};

	return (
		<View>
			<FlatList
				data={items}
				renderItem={({ item, index }) => (
					<Item
						done={item.done}
						contents={item.contents}
						toggle={() => toggle(index)}
					/>
				)}
			/>
			<StatusBar />
		</View>
	);
};

export default App;
