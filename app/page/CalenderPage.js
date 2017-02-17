import React, {Component} from 'react'

import {
    StyleSheet,
    View,
} from 'react-native'

class CalenderPage extends Component {
    render () {
        return (
            <View style={styles.content}>
            </View>
        )
    }
}

export default CalenderPage

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#bbb',
    },
})

