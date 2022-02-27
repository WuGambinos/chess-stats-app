import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ChessWebAPI from "chess-web-api/src/chess-web-api";

const Button = () => {

    const showData = () => {
        var chessAPI = new ChessWebAPI();
        
        chessAPI.getPlayerStats('mualphatheta')
        .then(function(response) {
            console.log('Player Stats', response.body.chess_daily);
        }, function(err) {
            console.error(error);
        });
    };

    return (
        <TouchableOpacity style={styles.button}
        onPress={() => showData()}>
            <Text style={styles.text}>
                Show Stats
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create( {
    button: {
        width: 150,
        height: 25,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },


    text:  {
        color: 'white',
        fontSize: 20,
    }

})
export default Button;