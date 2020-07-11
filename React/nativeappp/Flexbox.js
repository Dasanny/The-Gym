import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'; 

export default class Flexbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.box1}>one</Text>
                <Text style={styles.box2}>two</Text>
                <Text style={styles.box3}>three</Text>
                <Text style={styles.box4}>four</Text>

                <MaterialIcons name="delete" size={24} color="black" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mistyrose',
        flexDirection: 'row',
    },
    box1: {
        backgroundColor: 'violet',
        padding: 10,
    },
    box2: {
        backgroundColor: 'skyblue',
        padding: 10,
    },
    box3: {
        backgroundColor: 'coral',
        padding: 10,
    },
    box4: {
        backgroundColor: 'gold',
        padding: 10,
    },
})
