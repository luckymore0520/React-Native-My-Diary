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
    
    _renderContent(){
        switch (this.state.selectedIndex) {
            case 0: return <DiaryPage />
            case 1: return <CalenderPage />
            case 2: return <MomentPage />
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.navigator}>
                    <SegmentedControlIOS style={styles.segmentControl} selectedIndex={this.state.selectedIndex} tintColor="#4DA8E6" onChange={this._onChange} values={['Diary','Calender','Moment']} />
                </View>
                <View style={styles.content}>
                     {this._renderContent()}
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
    content:{
        flex:1
        
    },
    footer:{
        height:50,
        backgroundColor:'#4DA8E6'
    }

    
})

