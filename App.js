import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import Button from './components/Button';
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen>  
      </HomeScreen>

      <Button>

      </Button>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
