import React, {Component} from 'react'

import {
    StyleSheet,
    View,
} from 'react-native'

class MomentPage extends Component {
    render () {
        return (
            <View style={styles.content}>
            </View>
        )
    }
}

export default MomentPage

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#ccc',
    },
})

