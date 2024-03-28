import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const InputField = props => {
  return (
    <View>
      <Text style={styles.inputFieldName}>{props.fieldName}</Text>
      <TextInput
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        style={props.textInputStyles}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputFieldName: {
    marginBottom: 10,
  },
});
