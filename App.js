import React from 'react'
import {View, StyleSheet} from 'react-native'
import WeatherSearch from './src/components/weatherSearch'

const App = () => {
	return (
		<View style={styles.container}>
			<WeatherSearch />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
})

export default App
