import { StyleSheet, Text, View ,Dimensions,TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/screenResponsive'
import { colors } from '../../Utils/colors'



const Button = (props) => {
  return (
    
    
      <TouchableOpacity  onPress={props.onpress} disabled={props.disabled} style={styles.btnView}>
          {props.isLoading&&(
            <ActivityIndicator size={18} color={"#fff"}/>
          )}
        <Text style={styles.textStyle}>{props.label}</Text>
      </TouchableOpacity>
     
    
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT / 15,
        width: SCREEN_WIDTH,
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnView: {
        height: SCREEN_HEIGHT / 20,
        width: SCREEN_WIDTH/3.5,
        backgroundColor:colors.BRANDCOLOR2,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
      },
      textStyle: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
      },
})



