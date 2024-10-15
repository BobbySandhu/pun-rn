import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function CategoryCardView(props: { type: string }) {
  return (
    <Pressable
      style={styles.rootContainer}
      onPress={() =>
        router.navigate({
          pathname: '/screens/categoryjokelist',
          params: { type: props.type, headerTitle: props.type },
        })
      }
    >
      <Text style={styles.text}>
        {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
      </Text>
    </Pressable>
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
