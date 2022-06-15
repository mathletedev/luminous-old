import { FC } from "react";
import { Button, Text } from "react-native";

interface Props {
	done: boolean;
	contents: string;
	toggle: () => void;
}

export const Item: FC<Props> = ({ done, contents, toggle }) => (
	<Button
		style={{
			margin: 20,
			marginBottom: 0,
			backgroundColor: done ? "#ccffcc" : "#ffdddd",
			borderRadius: 20,
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			onclick: toggle
		}}
	>
		<Text style={{ padding: 20, textAlign: "center" }}>{contents}</Text>
	</Button>
);
