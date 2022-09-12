import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>
        Hello react native
      </Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300',
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
