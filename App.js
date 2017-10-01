import React from 'react';
import { ART, StyleSheet, Text, View, Dimensions } from 'react-native';
const {
  Group, Shape, Surface
} = ART;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Surface width={500} height ={500}>
          <Group x={0} y={0}>
            <Shape
             d="M84,121 C130.391921,121 168,106.673113"
             stroke="#000"
             strokeWidth={1}
             />
          </Group>
        </Surface>
      </View>
    );
  }
}

const screenSet = {
  ex: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.7
    },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
