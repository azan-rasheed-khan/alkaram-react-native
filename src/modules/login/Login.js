import React from "react"
import { 
    ScrollView,
    View ,
    StyleSheet,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Button,
    TouchableOpacity
} from "react-native"
import { useHeaderHeight } from '@react-navigation/elements'



const LoginScreen = ({navigation}) => {
    const onPressLearnMore = () => {
        navigation.navigate('Home')
    }
    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );
      const height = useHeaderHeight()
    return(
        <>
        <KeyboardAvoidingView
            behavior="height"
            style={styles.container}
            keyboardVerticalOffset={64}
        >
            <ScrollView style={styles.loginParent}>
                <Text style={styles.loginHeading}>
                    Login
                </Text>
                <Text style={styles.loginDesc} >
                    Please Sign In To Continue
                </Text>
                <TextInput placeholder="Enter Your Email" style={styles.inputField} />
                <TextInput 
                    placeholder="Enter Your Password" 
                    style={[styles.inputField,{
                        marginTop : 30
                    }]} 
                />
                <AppButton title="Login " onPress={onPressLearnMore} />
            </ScrollView>
        </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    loginParent : {
        flex : 1,
        // backgroundColor : 'yellow'
        paddingLeft : 30,
    },
    container: {
        flex: 1
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
      }
})



export default LoginScreen