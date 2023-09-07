//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Styles from './Styles';
import { Icon } from '../../Icons';
import { colors } from '../../../Utils/colors';


// create a component
const TextInputWithIcon = ({
  keyboardType,
  Label,
  placeholder,
  LabelStyle,
  style,
  onSubmitEditing ,
  onChangeText  ,
  value,
  onPressIn,
  editable = true,
  ref,
  autoFocus = false,
  defaultValue,
  onFocus,
  maxLength,
  LefticonFamily,
  Lefticoncolor,
  LefticonName,
  Lefticonsize,
  Yonpress,
  RightIconFamily,
  RightIconcolor,
  RightIconName,
  RightIconSize,
  RightIconPress,
  TextinputWidth,
  secureTextEntry,
  onBlur,
  autoComplete = 'off'
}) => {


  return Label ? (
    <View>
      <Text style={LabelStyle}>{Label}</Text>
      <View style={[styles.Mainstyle,{width:TextinputWidth}]}>

        <Icon iconFamily={LefticonFamily}
          color={Lefticoncolor} name={LefticonName} size={Lefticonsize}
        />

        <TextInput
          onPressIn={onPressIn}
          autoComplete={autoComplete}
          style={styles.input}
          onChangeText={ onChangeText}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={'#eeeeee'}
          value={value}
          keyboardType={keyboardType}
          defaultValue={defaultValue}
          ref={ref}
          secureTextEntry={secureTextEntry}
          autoFocus={autoFocus}
          onFocus={onFocus}
          maxLength={maxLength}></TextInput>
        <Icon iconFamily={RightIconFamily}
          color={RightIconcolor} name={RightIconName} size={RightIconSize}
          onPress={RightIconPress} />
      </View>

    </View>
  ) : (

    <View style={[styles.Mainstyle,{width:TextinputWidth}]}>

      <Icon iconFamily={LefticonFamily}
        color={Lefticoncolor} name={LefticonName} size={Lefticonsize}
      />
      <TextInput
        onPressIn={onPressIn}
        style={styles.input}
        onChangeText={onChangeText}
        onSubmitEditing={ onSubmitEditing}
        value={value}
        editable={editable}
        placeholder={placeholder}
        keyboardType={keyboardType}
        ref={ref}
        onBlur={onBlur}
        autoFocus={autoFocus}></TextInput>
      <Icon iconFamily={RightIconFamily}
        color={RightIconcolor} name={RightIconName} size={RightIconSize}
        onPress={RightIconPress} />
    </View>

  );
};

const styles = StyleSheet.create({
  Mainstyle:{
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 4,
    backgroundColor: '#fff',
    borderWidth:.5
  },
  input:{
    flex:1,
    color:colors.black
  }
})


export default TextInputWithIcon;
