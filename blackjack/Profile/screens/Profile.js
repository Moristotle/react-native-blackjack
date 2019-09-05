import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet} from 'react-native';
//import { getProfile } from '../profile-service';
//import {profileContext} from '../profile-context';




import { Container, Header, Content, List, ListItem, Text, Title, Body, Button, Right, Left , Item, Input, Thumbnail} from 'native-base';

export default function Profile(){
    const uri = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

    //const profileStore = useContext(profileContext); //name, highscore, totalscore


    const [profile, setProfile] = useState({
        name: "Mathias Birkeland",
        totalScore: 79,
        highScore: 23
    })
    return (
        <Container style={styles.profile}>
            {/* <Header>
            <Body>
                <Text>Profile</Text>
            </Body>
            </Header> */}
                <Thumbnail large source={{uri: uri}} />
                <Text style={styles.name}>{profile.name}</Text>
                <Text>Total Score: {profile.totalScore}</Text>
                <Text>Highest Score: {profile.highScore}</Text>

        </Container>
    )

    
}
const styles = StyleSheet.create({
    profile:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 100
    },
    name:{
        margin: 20,
        fontSize: 35,
    }
  });