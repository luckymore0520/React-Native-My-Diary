import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native'
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

export default  class DiaryPage extends Component {
    render () {
        return (
            <View style={styles.content}>
                <View style={styles.titleBackground}>
                    <Text style={styles.title}> Diary </Text>      
                </View>  
                <View style={styles.line}>
                </View>
                <Image source={require("../res/diary-background.png")} style={styles.background}>
                    <Diary />
                </Image>
            </View>
        )
    }
}


class Diary extends Component {
    render() {
        return (
            <View style={diaryStyles.background}>
                <View style={diaryStyles.content}>
                    {/*左侧日期*/}
                    <View style={diaryStyles.date}>
                        <Text style={diaryStyles.dayOfMonth}>14</Text>
                        <Text style={diaryStyles.dayOfWeek}>Tues</Text>
                    </View>
                    {/*内容*/}
                    <View style={diaryStyles.diary}>
                        <Text style={diaryStyles.time}>10:40</Text>
                        <Text style={diaryStyles.description} numberOfLines={2}>这是日记的内容啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
                        </Text>
                     </View>
                     {/*天气与标签*/}
                     <View style={diaryStyles.states}>
                            <Image source={require("../res/qingB30~iphone@2x.png")} resizeMode='contain' style={diaryStyles.tag} />
                            <Image source={require("../res/collectionLarge~iphone@2x.png")} resizeMode='contain' style={diaryStyles.tag} />
                     </View>
               </View>
            </View>
        );
    }
}


const diaryStyles = StyleSheet.create({
    background: {
        backgroundColor: 'transparent',
        height: 100,
    },
    content: {
        marginTop:15,
        marginHorizontal:20,
        height:85,
        backgroundColor:'#fff',
        flexDirection:'row',    
        shadowColor: 'gray',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 3,
        shadowOpacity: 0.6,
        borderRadius: 5,
    },
    date: {
        width:60,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    dayOfMonth: {
        fontWeight: '500',
        fontSize:40,
        color:'#52A9E3',
    },
    dayOfWeek: {
        marginTop:-5,
        fontSize:18,
        color:'#4DA8E6',

    },
    diary: {
        flex:1,
        justifyContent:'center',
        paddingLeft:15,
    },
    time: {
        color:'#4DA8E6',
        fontSize:12,
        marginBottom:5,
    },
    description: {
        color:'#4DA8E6',
        fontSize:12,
        fontWeight: '500',
    },
    states: {
        width:45,
        height: 50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    tag: {
        width:10,
        marginRight:10,
    }
})




const styles = StyleSheet.create({


    content:{
        flex: 1,
        alignItems: 'center',
    },
    titleBackground: {
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
     
    },
    title: {
        fontSize: 20,
        color: '#4DA8E6',
        backgroundColor: 'transparent'
    },
    line: {
        height: 1,
        backgroundColor: '#cccccc',
    },
    background: {
        flex: 1,
        width:width
    }
})

