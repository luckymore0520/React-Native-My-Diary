import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Image,
} from 'react-native'

class MomentPage extends Component {
    render () {
        return (
            <View style={styles.content}>
                <Image source={require("../res/bgW~iphone@2x.png")} style={styles.background} />
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
    background: {
        flex: 1,
    }
})

