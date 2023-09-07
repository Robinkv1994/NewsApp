import {Dimensions, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../Utils/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/screenResponsive';

const {height, width} = Dimensions.get('window');

const TextInputs = props => {
  const [focus, setFocus] = useState(false);
  const [hidden,setHidden]=useState(true)
  return (
    <View style={[styles.container,{width:props.width}]}>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.textstyle}>{props.label}</Text>
      <Text style={{color:'red'}}>{props.required}</Text>
      </View>
      
      <View style={[styles.childContainer,{borderColor:focus?colors.BRANDCOLOR2:'#000'}]}>
        <Icons style={styles.iconStyle} name={props.Name}/>

<TextInput
          style={styles.InputStyle}
          placeholderTextColor={'black'}
          placeholder={ props.placeholder}
          secureTextEntry={props.secureText}
          keyboardType={props.keyboardType}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          underlineColorAndroid='transparent'
          value={props.value}
          onChangeText={props.onChangeText} onSubmitEditing={props.onSubmitEditing}
          blurOnSubmit={true}
          editable={props.editable}
          defaultValue={props.defaultValue}
          autoCapitalize={props.autoCapitalize}
          ></TextInput>

          <Icon style={styles.iconStyle}  name={props.Icon} onPress={props.onPress}/>
          {props.leftText&&(
            <TouchableOpacity style={{backgroundColor:colors.BRANDCOLOR2,padding:10,borderRadius:12}} onPress={props.onPress}>
              <Text style={{color:'#fff',fontWeight:'bold'}}>{props.leftText}</Text>
            </TouchableOpacity>
            
          )}

      </View>
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({
  container: {
    width:SCREEN_WIDTH/1.3,
    marginBottom:10,
    justifyContent:'center',
    
  },
  childContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: '#49E575',
    borderWidth:1,
    height: SCREEN_HEIGHT / 15,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10
  },
  InputStyle: {
    fontSize:12,
    flex:1,
    color:'#000',
  
  },
  iconStyle: {
    fontSize: 16,
    color: '#00668F',
    
  },
  textstyle: {
    fontSize: 12,
    fontWeight: 'bold',
    // marginBottom: 10,
    color: '#000',
    
  }
});
