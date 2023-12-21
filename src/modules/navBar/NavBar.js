import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput
} from 'react-native';

const NavBar = () => {
    return(
        <View>
          <Text>
            Navbar
          </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerDiv : {
        width:'100%',
        height:1000,
        backgroundColor:"green",
  },
  container : {
    flex : 1
  }
  });

export default NavBar