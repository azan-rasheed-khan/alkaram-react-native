import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {useSelector} from 'react-redux';
import {GlobalStatesData} from '../../Redux/slices/globalStatesSlice';
import logoFrame from '../../../assets/Frame.png';

export const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const heightImgFrame = Dimensions.get('window').height * 0.4;
const widthImgFrame = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const globalState = useSelector(GlobalStatesData);
  const onPressLearnMore = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      console.log(email, password);
      alert('Please enter email and password');
    }
  };

  const height = useHeaderHeight();
  console.log(globalState?.globalStatesSlice?.openState);
  return (
    <>
      <KeyboardAvoidingView
        behavior="height"
        style={styles.container}
        keyboardVerticalOffset={64}>
        <ScrollView style={styles.loginParent}>
          {/* <Text style={styles.loginHeading}>
                    Login
                </Text>
                <Text style={styles.loginDesc} >
                    Please Sign In To Continue
                </Text> */}
          <View style={styles.inputLogoFrame}>
            <Image source={logoFrame} />
          </View>
          <TextInput
            value={email ? email : ''}
            onChangeText={e => {
              setEmail(e);
            }}
            placeholder="Enter Your Email"
            style={styles.inputField}
          />
          <TextInput
            placeholder="Enter Your Password"
            style={[
              styles.inputField,
              {
                marginTop: 30,
              },
            ]}
            value={password ? password : ''}
            secureTextEntry
            onChangeText={e => {
              setPassword(e);
            }}
          />
          <AppButton title="Login " onPress={onPressLearnMore} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={styles.signUpBtn}>
            <Text style={styles.signUpBtnText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  loginParent: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  loginHeading: {
    paddingTop: '40%',
    fontSize: 40,
    fontWeight: '900',
    color: 'black',
  },
  loginDesc: {
    fontSize: 20,
    color: 'grey',
    fontWeight: '500',
    marginBottom: 50,
  },
  inputField: {
    height: 45,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  loginButton: {
    height: 50,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 100,
    marginTop: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  signUpBtn: {
    marginTop: 10,
  },
  inputLogoFrame: {
    display: 'flex',
    height: heightImgFrame,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
