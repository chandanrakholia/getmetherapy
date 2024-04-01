import { StyleSheet, Text, View, Dimensions, TextInput, Button, Alert } from 'react-native'
import React from 'react'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Login = () => {
    return (
        <>
            <View style={styles.headingdiv}>
                <Text style={styles.heading}>Login to your  account.</Text>
                <Text style={styles.des}>Please sign in to your account </Text>
            </View>
            <View style={styles.emaildiv}>
                <Text style={styles.email}>Email Address</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='Enter Email'
                />
            </View>
            <View style={styles.emaildiv}>
                <Text style={styles.email}>Password</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='Password'
                />
            </View>
            <View style={styles.fixToText}>
                <Button
                    title="Forget password?"
                    color="#FE8C00"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}>
                </Button>
            </View>
            <View style={styles.fixToText2}>
                <Button
                    style={styles.btnsignin}
                    title="Sign In"
                    color="#FE8C00"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}>
                </Button>
            </View>
            <View style={styles.orsign}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#878787' }} />
                <View>
                    <Text style={{ width: 96, textAlign: 'center' }}>Or sign in with</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#878787' }} />
            </View>
            <View> 
                <Text>Google</Text>
            </View>
            <View>
                <Text style={styles.maintext}>
                    <Text style={styles.dont}>Don't have a account?</Text>
                    <Text style={styles.register}> Register</Text>
                </Text>
            </View>

        </>
    )
}

export default Login

const styles = StyleSheet.create({
    headingdiv: {
        width: 327,
        height: 108,
        // backgroundColor: "red",
        // justifyContent: 'center',
        marginLeft: (screenWidth - 327) / 2,
        marginTop: 76 - 44
    },
    heading: {
        fontWeight: "600",
        fontSize: 32,
        lineHeight: 40,
        color: "#101010"
    },
    des: {
        marginTop: 8,
    },
    emaildiv: {
        width: 327,
        height: 80,
        marginTop: 40,
        marginLeft: (screenWidth - 327) / 2,
        // backgroundColor:"green",
    },
    email: {
        fontSize: 14,
        fontWeight: "500",
        color: "#101010",
    },
    textinput: {
        width: 327,
        height: 52,
        borderRadius: 8,
        color: "#101010",
        fontSize: 14,
        borderWidth: 0.5
    },
    fixToText: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // left: 32,
        width: 327,
        marginLeft: (screenWidth - 327) / 2,
    },
    fixToText2: {
        marginTop: 20,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // left: 32,
        width: 327,
        marginLeft: (screenWidth - 327) / 2,
    },
    orsign: {
        // width: 327,
        flexDirection: 'row',
        justifyContent:"space-around",
        alignItems: 'center'
    },
    maintext:{
        textAlign: "center",
    },
    dont:{
        fontSize:14,
        lineHeight:20,
        fontWeight:"400",
    },
    register:{
        color: "#FE8C00",
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "600",
    }

})