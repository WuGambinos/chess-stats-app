import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Button} from './Button'
import React, {useState} from 'react';

const HomeScreen = () => {

    const [text, setText] = useState('');
    const showText = () => {
        console.log(text);
    };

    return (
        <View>
            <TextInput
            placeholder="Enter Chess.com name"
            onChangeText={newText => setText(newText)}
            onSubmitEditing={() => showText()}>        
            </TextInput>
        </View>
    )

}


export default HomeScreen;