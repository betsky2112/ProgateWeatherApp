import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

const CustomTextInput = ({
	text,
	onChange,
	multiline = false,
	placeholder,
	numberOfLines,
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				placeholder={placeholder}
				multiline={multiline}
				numberOfLines={numberOfLines}
				onChangeText={onChange}
				style={styles.input}
				defaultValue={text}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	input: {
		borderWidth: 2,
		borderColor: '#dddddd',
		padding: 10,
	},
})

export default CustomTextInput
