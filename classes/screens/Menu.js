import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native';



class Menu extends Component {
    render() {
        //console.log("At profile");
        return (
            <View style={styles.fullscreen}>
                
                <View style={styles.container}>
                    <View style={styles.top} onPress={() => this.props.change(2)}>
                        <Text style={{color: "black"}}>Abyss</Text>
                    </View>
                    <View style={styles.bottom} onPress={() => this.props.change(3)}>
                            <Text style={{color: "black"}}>Reality</Text>
                        </View>
                </View>
                <View style={[styles.profile, {transform: [{ rotate: '0deg' }]}]}>
                    <Text style={{color: "white"}}>Hah</Text>
                </View>
            </View>
        );
    }

    myAlert() {
        // Works on both Android and iOS (create an alert)
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    }
}

  const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignSelf: 'stretch',
    },
    top: {
        flex: 0.5,
        backgroundColor: "lightgrey",
        borderBottomWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        flex: 0.5,
        backgroundColor: "lightblue",
        borderTopWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: 'black',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

export default Menu;