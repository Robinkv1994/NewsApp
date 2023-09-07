import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/screenResponsive'

const NewsCard = ({title,time,image,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
     <View style={styles.ImageView}>
    <Image source={{uri:image}} 
    style={{flex:1}}/>
     </View>
     <View style={styles.NewsView}>
<Text style={styles.textstyleTitle}>{title}</Text>
<Text style={styles.textstyleTime}>{time}</Text>
     </View>
    </TouchableOpacity>
  )
}

export default NewsCard

const styles = StyleSheet.create({
    container:{
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT/5,
        backgroundColor:'#fff',
        flexDirection:'row',
        marginBottom:10,
        padding:10
    },
    ImageView:{
        width:SCREEN_WIDTH/3,
        height:'100%',
        resizeMode:'contain'
    },
    NewsView:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:10
    },
    textstyleTitle:{
        fontSize:16,
        color:'#000',
        fontWeight:'bold'
    },
    textstyleTime:{
        fontSize:12,
        color:'#000',
        fontStyle:'italic'
    }
})