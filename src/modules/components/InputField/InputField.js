import React from "react"
import { StyleSheet, TextInput, View , Text } from "react-native"


const InputField = (props) => {
    return (
    <View>
        <Text>{props.fieldName}</Text>
        <TextInput />
    </View>
    ) 
}

export default InputField


const styles = StyleSheet.create({

})