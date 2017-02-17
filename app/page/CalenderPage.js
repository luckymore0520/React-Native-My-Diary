import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Image,
} from 'react-native'

class CalenderPage extends Component {
    render () {
        return (
            <View style={styles.content}>
                <Image source={require("../res/bg~iphone@2x.png")} style={styles.background} />
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

