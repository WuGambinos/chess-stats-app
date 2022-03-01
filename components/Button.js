import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';


const Button = (props) => {



    return (
        <TouchableOpacity style={styles.button}
        onPress={props.onPress}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create( {
    button: {
        width: 276,
        height: 71,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },


    text:  {
        color: 'white',
        fontSize: 20,
    }

});

export default Button;