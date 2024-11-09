import { StyleSheet, Text, View, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título</Text>
      <Text style={styles.description}>Descripción</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9edc9',
    alignItems: 'center',
    justifyContent: 'center',
    gap: height > 900 ? 30 : 15 
  },
  title: {
    fontSize: width > 600 ? 45 : 35, 
    fontWeight: 'bold',
    color: '#d4a373',
  },
  description: {
    fontSize: width > 600 ? 30 : 20, 
    color: '#555',
  },
});
