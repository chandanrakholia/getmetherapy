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
	Button,
	Alert,
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
import Onboarding from "./Onboarding"
import Login from "./Login"
function App() {
	return (
		<>
		{/* <Onboarding/> */}
		<Login/>
		</>
	);
}

const styles = StyleSheet.create({

});

export default App;
