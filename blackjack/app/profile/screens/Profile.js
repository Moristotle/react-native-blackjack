import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet} from 'react-native';
import {profileContext} from '../profile-context';
import { Container, Header, Content, List, ListItem, Text, Title, Body, Button, Right, Left , Item, Input, Thumbnail} from 'native-base';
import { useObserver } from 'mobx-react-lite';

export default function Profile(){
    const uri = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    const profileStore = useContext(profileContext); //name, highscore, totalscore

    return useObserver(() => (
        <Container style={styles.container}>
                <Thumbnail large source={{uri: uri}} />
                <Text style={styles.name}>{profileStore.profile.name}Hello</Text>
                <Text style={styles.text}>Total Score: {profileStore.profile.totalScore}</Text>
                <Text style={styles.text}>Highest Score: {profileStore.profile.highScore}</Text>

        </Container>
    ));
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#505050',
        alignItems: 'center',
        paddingTop: 100,
        justifyContent: 'flex-start'
    },
    name:{
        fontSize: 35,
        color: 'white',
    },
    text: {
        color: 'white',
    }
  });