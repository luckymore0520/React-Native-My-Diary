import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    SegmentedControlIOS,
    Text,
} from 'react-native'
import DiaryPage from './DiaryPage'
import MomentPage from './MomentPage'
import CalenderPage from './CalenderPage'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:0
        };
        this._onChange = this._onChange.bind(this)
    }

    _onChange(event) {
        this.setState({
            selectedIndex: event.nativeEvent.selectedSegmentIndex,
        });
    }
    

    render () {
        let selectedIndex = this.state.selectedIndex;
        return (
            <View style={styles.container}>
                <View style={styles.navigator}>
                    <SegmentedControlIOS style={styles.segmentControl} selectedIndex={this.state.selectedIndex} tintColor="#4DA8E6" onChange={this._onChange} values={['Diary','Calender','Moment']} />
                </View>
                <View style={selectedIndex === 0 ? styles.contentViewToShow : styles.contentView}>
                    <DiaryPage />
                </View>
                <View style={selectedIndex === 1 ? styles.contentViewToShow : styles.contentView}>
                    <CalenderPage/>
                </View>
                <View style={selectedIndex === 2 ? styles.contentViewToShow : styles.contentView}>
                    <MomentPage />
                </View>
                <View style={styles.footer}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    navigator:{
        height:60,
        backgroundColor:'#fff',
        alignItems: 'center',
    },
    segmentControl: {
        marginTop:28,
        width: 270,
    },
    contentView: {
        position:'absolute',
        top:60,
        bottom:50,
        left:0,
        bottom:0,
    },
    contentViewToShow: {
        position:'absolute',
        top:60,
        bottom:50,
        left:0,
        bottom:0,
        zIndex:999,
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:50,
        backgroundColor:'#4DA8E6',
        zIndex:1000,
    }

    
})

