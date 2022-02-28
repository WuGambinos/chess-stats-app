import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Data = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.square}></View>
            <Text style={styles.stats}>{props.tc}</Text>
        </View>
    )

}


const StatsScreen = () => {

    return (
        <View>
            <Data tc="Blitz:">    
            </Data>

            <Data tc="Bullet:">    
            </Data>

            <Data tc="Daily:">    
            </Data>

            <Data tc="Rapid:">    
            </Data>
        </View>

    )

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },


    item: { 

        marginLeft: 35,
        marginTop: 90,
        alignItems: 'center',
        flexDirection: 'row',

    },

    stats:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',


    },

    innerContainer: {
        backgroundColor: "red",
        width: 200,
    },
    text: {
        color: 'white',
        textAlign: 'right',
    },


    square: {
        width: 25,
        height: 25,
        backgroundColor: "green",
        borderRadius: 5,
        marginRight: 15,
        opacity: 0.4,
    }
})


export default StatsScreen;