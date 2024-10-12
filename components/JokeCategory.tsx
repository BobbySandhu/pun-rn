import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function CategoryCardView(props) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>
        {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 18,
    backgroundColor: '#ffffff',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 1 },
    borderRadius: 8,
    elevation: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
