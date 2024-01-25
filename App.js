import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';
import Header from './src/modules/Ui/header/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/modules/Ui/login/Login';
import SignUp from './src/modules/Ui/SignUp/SignUp';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import SplashScreen from 'react-native-splash-screen';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
        
      />
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />
      <TextInput 
        style={{height:40,margin:12,borderWidth:1,padding:10,width:200}}
      />
    </View>
  );
}


const App = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    // SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            title: 'Login',
            headerShown : false,
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
          initialRouteName="Login">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
          <Stack.Screen name='Header' component={Header} />
          <Stack.Screen name='Details' component={DetailsScreen} />
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{title : 'Sign Up'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

const styles = StyleSheet.create({
  parentDiv : {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
    borderWidth:1,
    borderColor:'yellow'
}
});

export default App;
