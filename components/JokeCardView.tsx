import onShare from '@/common/utils';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';

export default function JokeCardView(props) {
  return (
    <View style={style.container}>
      <Text style={[style.body, style.textStyleItalicBold]}>{props.setup}</Text>
      <Text style={style.body}>{props.punchline}</Text>
      <View style={style.buttonContainer}>
        <Pressable onPress={() => {
          
        }} style={style.button}>
          <Text style={style.buttonText}>Save</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            onShare(props.setup + '\n' + props.punchline);
          }}
          style={style.button}
        >
          <Text style={style.buttonText}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 8,
    elevation: 8,
    backgroundColor: '#ffffff',
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  body: {
    fontSize: 16,
    lineHeight: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#fff777',
    paddingTop: 6,
    paddingBottom: 6,
    paddingStart: 10,
    paddingEnd: 10,
    alignContent: 'center',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
  },
  textStyleItalicBold: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
