import React, { useState, useEffect } from 'react';
import { } from 'native-base';
import { StyleSheet, View, Text, Image, Alert  } from 'react-native';
import Button from './customButton';
import InputField from './InputField';
import {useNavigation} from 'react-navigation-hooks';


export default function LoginScreen() {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const {navigate} = useNavigation();

    useEffect(() => {
        console.log('This works!')
    }, [])

    const nameHandler = inputText => {
        setName(inputText);
    }

    const loginHandler = () => {
        setName('');
        navigate('home');   
    }
    

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Welcome to the (React) Native Blackjack Game</Text>
            </View>
            
            <View style={styles.imageContainer}>
                <Image style={styles.image}  source={require("../../assets/react-icon.png")}/>
            </View>
            <View style={styles.inputContainer}>
                <InputField placeholder="Name" onChangeText={nameHandler} value={name} />
            </View>

            <Button onPress={loginHandler}>
                login
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#808080",
        textAlign: "center",
    },
    headingContainer: {

    },
    heading: {
        alignSelf: "flex-start",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: "#808080",
        overflow: "hidden",
        marginVertical: 20,
    },
    Image: {
        width: 100,
        height: 100
    },
    inputContainer: {
        marginVertical: 20,
        color: 'white'
    }
})