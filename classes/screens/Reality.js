import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export default class Reality extends Component {
    render(props) {
        console.log("At Reality: " + this.props.nextPost);
        return (
            <View style={styles.fullscreen}>
                <Post />
            </View>
        );
    }
}

class Post extends Component {
    render() {
        return (
        <View style={styles.post}>
            <View style={styles.picture}></View>
            <View style={styles.caption}>
                <Text>Often Dissapointing</Text>
            </View>
        </View>
        
        );
    }
}


const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
    },
    post: {
        flex: 1,
    },
    picture: {
        flex: 0.8,
        backgroundColor: "grey",
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    caption: {
        flex: 0.2,
        backgroundColor: "lightblue",
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
    },
    textInput: {
      height: 40,
      width: 100,
      borderColor: 'gray',
      borderWidth: 1
    }
  });
