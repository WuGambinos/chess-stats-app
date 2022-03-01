import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './Button'
import React, {useState} from 'react';
import ChessWebAPI from "chess-web-api/src/chess-web-api";

const HomeScreen = ({navigation}) => {

    const [username, setUsername] = useState('');

    let blitz = "";
    let bullet = "";
    let rapid = "";
    let daily = "";

    const showData = () => {
        var chessAPI = new ChessWebAPI();
        
        chessAPI.getPlayerStats(username)
        .then(function(response) {
            console.log('Player Stats', response.body);
            blitz = response.body.chess_blitz.last.rating;
            console.log(blitz);
        }, function(err) {
            console.error(error);
        });
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                placeholder="Enter Chess.com name"
                onChangeText={newUsername => setUsername(newUsername)}
                onSubmitEditing={() => showData()} />
            </View>

            <View>
                <Button text="Show Stats" onPress={() => navigation.navigate('Data')}/>
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