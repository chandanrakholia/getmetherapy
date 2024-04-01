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
const onboarding = () => {
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
                    <View style={styles.fixToText}>
                        <Button
                            title="skip"
                            color="#FE8C00"
                            onPress={() => Alert.alert('Button with adjusted color pressed')}>
                        </Button>
                        <Button
                            title="next"
                            color="#FE8C00"
                            onPress={() => Alert.alert('Button with adjusted color pressed')}>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

export default onboarding

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
        // top: 372,
        marginTop: 372,
    },
    headingdiv: {
        width: 252,
        height: 120,
        // backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        left: 32,
        // top: 404 - 372,
        marginTop: 404 - 372,

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
        // top: 50
        marginTop: 440 - 372,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
        color: "#FFFFFF",
    },
    fixToText: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 32,
        width: 247
    },
})