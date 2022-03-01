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
        <View style={styles.container}>
            <View>
                <TextInput
                placeholder="Enter Chess.com name"
                onChangeText={newText => setText(newText)}
                onSubmitEditing={() => showText()} />
            </View>

            <View>
                <Button onPress={() => navigation.navigate('Data')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });


export default HomeScreen;