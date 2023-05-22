import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { AppButton } from "../login/Login"






const SignUp = ({navigation}) => {
    const [email,setEmail] = useState(null)
    const [name,setName] = useState(null)
    const [conPasword,setConPassword] = useState(null)
    const [password,setPassword] = useState(null)  
    const onPressLearnMore = () => {
        if (email && password && conPasword && name) {
            if (password === conPasword) {
                navigation.navigate('Home')
            } else {
                alert ('your password does not match')
            }
        } else {
            // console.log(email,password)
            alert('Please enter all information')
        }
    }
    return (
        <KeyboardAvoidingView
            behavior="height"
            style={styles.container}
            keyboardVerticalOffset={64}
        >
            <ScrollView style={styles.signUpParent}>
                <Text style={styles.loginHeading}>
                    Sign Up
                </Text>
                <Text style={styles.loginDesc} >
                    Please Enter your information
                </Text>
                <TextInput value={name ? name : ''} onChangeText={(e)=>{
                    setName(e)
                }} placeholder="Enter Your Name" style={styles.inputField} />
                <TextInput value={email ? email : ''} onChangeText={(e)=>{
                    setEmail(e)
                }} placeholder="Enter Your Email" style={styles.inputField} />
                <TextInput 
                    placeholder="Enter Your Password" 
                    style={[styles.inputField,{
                        borderWidth : 1,
                        borderColor : conPasword === password ? 'green' : 'red'
                    }]}
                    value={password ? password : ''}
                    secureTextEntry
                    onChangeText={(e)=>{
                        setPassword(e)
                    }}
                />
                <TextInput 
                    value={conPasword ? conPasword : ''} 
                    onChangeText={(e)=>{
                    setConPassword(e)
                }} 
                    placeholder="Confirm Your Password" 
                    secureTextEntry 
                    style={[styles.inputField,{
                        borderWidth : 1,
                        borderColor : conPasword === password ? 'green' : 'red'
                    }]}
                />
                <AppButton title="SignUp " onPress={onPressLearnMore} />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    signUpParent : {
        flex : 1,
        // backgroundColor : 'yellow'
        paddingLeft : 30,
    },
    loginHeading : {
        paddingTop : '40%',
        fontSize : 40,
        fontWeight : '900',
        color : 'black'
    },
    loginDesc : {
        fontSize : 20,
        color : 'grey',
        fontWeight : '500',
        marginBottom : 50
    },
    inputField : {
        height : 45,
        width : 300,
        backgroundColor : 'white',
        // borderWidth: 1,
        borderRadius : 5,
        padding : 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        marginBottom : 15
    },
    loginButton : {
        height : 50,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "orange",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width : 100,
        marginTop : 20,
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
})

export default SignUp