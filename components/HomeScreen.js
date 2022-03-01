import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './Button'
import React, {useState} from 'react';

const HomeScreen = ({navigation}) => {

    const [text, setText] = useState('');
    const showText = () => {
        console.log(text);
    };

    return (
        <View>
            <View>
                <TextInput
                placeholder="Enter Chess.com name"
                onChangeText={newText => setText(newText)}
                onSubmitEditing={() => showText()}>        
                </TextInput>
            </View>

            <View>
                <Button/>
            </View>
        </View>
    );
};


export default HomeScreen;