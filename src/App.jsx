import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	NavigationBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	ImageBackground,
	Image,
} from 'react-native';

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import image from "../assets/image7.png"
import { TextInput, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
function App() {

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
			{/* <NavigationBar barStyle="light-content" backgroundColor="transparent" translucent={true} /> */}
			<ImageBackground
				source={image}
				resizeMode="stretch"
				style={styles.img}>
				<View style={styles.div}>
					<View style={styles.headingdiv}>
						<Text style={styles.heading}>We serve incomparable delicacies</Text>
					</View>
					<View style={styles.textdiv}>
						<Text style={styles.text}>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</Text>
					</View>
				</View>
			</ImageBackground>
		</>
	);
}

const styles = StyleSheet.create({
	img: {
		height: screenHeight,
		width: screenWidth,
		// justifyContent: 'center',
		alignItems: 'center',
	},
	div: {
		backgroundColor: "#FE8C00",
		width: 311,
		height: 400,
		borderRadius: 48,
		top: 372,
	},
	headingdiv: {
		width: 252,
		height: 120,
		// backgroundColor: "red",
		alignItems: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		left: 32,
		top: 404 - 372,
	},
	heading: {
		fontSize: 32,
		textAlign: 'center',
		lineHeight: 40,
		color: "#FFFFFF",
		fontWeight: "600",
		fontFamily: "inter",
	},
	textdiv: {
		width: 251,
		height: 60,
		// top: 540 - 372,
		left: 70 - 32,

	},
	text:{
		fontSize: 14,
		lineHeight: 20,
		textAlign: "center",
		color: "#FFFFFF",
	}
});

export default App;
