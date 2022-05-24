import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import Home from './src/screens/home';

export default function App() {
  const [loaded] = useFonts({
    "Inter-Regular": require('./assets/fonts/Inter-Regular.ttf'),
    "Inter-Bold": require('./assets/fonts/Inter-Bold.ttf'),
  });

  if (!loaded) {
    return <Text> Font is comming soon....</Text>;
  }


  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
});
