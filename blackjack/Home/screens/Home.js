import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, Image} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

//import { getProfile } from '../profile-service';
//import {profileContext} from '../profile-context';

import { Container, Header, Content, List, ListItem, Text, Title, Body, Button, Right, Left , Item, Input, Thumbnail} from 'native-base';

export default function Home(){
    const {navigate} = useNavigation();


    //const profileStore = useContext(profileContext); //name, highscore, totalscore

    return (
        <Container style={styles.home}>
            {/* <Header>
            <Body>
                <Text>Profile</Text>
            </Body>
            </Header> */}
               
               
                <Image
                style={{width: 350, height: 100, marginBottom: 50, marginTop: 100}}
                source={{uri: 'https://gmassets.cdnppb.net/betfair-com/d12ff75866ae46d22af9072707789f83d0e9d60a_premiumblackjack_logo.png'}}
                />
                <Button rounded style={styles.button}>
                    <Text style={styles.text}>
                        Start Game
                    </Text>
                </Button>
                <Button rounded style={styles.button} onPress={() => navigate("profile")}>
                    <Text style={styles.text}>
                        Profile
                    </Text>
                </Button>
                <Button  rounded style={styles.button}>
                    <Text style={styles.text}>
                        Log Out
                    </Text>
                </Button>



        </Container>
    //     <Button danger onPress={() => deleteTodo(t.id)}>
    //     <Text>Delete</Text>
    //      </Button>
    )   

    
}
const styles = StyleSheet.create({
    home:{
        flex: 1,
        backgroundColor: '#505050',
        alignItems: 'center'    
        
    },
    button:{
        marginTop: 15,
        backgroundColor: 'black'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});