import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import Button from './components/Button';
import StatsScreen from './components/StatsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="HomeScreen" 
      screenOptions={{headerShown: false}}>

        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Data" component={StatsScreen}/>

      </Stack.Navigator>
      
    </NavigationContainer>
      /*<View style={styles.container}>
        <HomeScreen>  
        </HomeScreen>

        <Button>
        </Button>
      </View>*/


    //<StatsScreen></StatsScreen>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
