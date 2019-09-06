import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputField = props => {
    return (
        <TextInput style={styles.input} {...props} />
    )
}

export default InputField;

const styles = StyleSheet.create({
    input: {
        width: 250,
        height: 30,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: 'center'
    }

})

