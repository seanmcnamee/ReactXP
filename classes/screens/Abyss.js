import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export default class Abyss extends Component {
    render(props) {
        console.log("At Abyss");
        return (
            <View style={styles.fullscreen}>
                <Post />
            </View>
        );
    }
}

//
class Post extends Component {
    render() {
        return (
        <Text>I'm the shitpost</Text>
        );
    }
}


const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        backgroundColor: "lightgrey",
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
      height: 40,
      width: 100,
      borderColor: 'gray',
      borderWidth: 1
    }
  });
