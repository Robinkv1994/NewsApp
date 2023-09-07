import {View, Text, TextInput,TouchableHighlight} from 'react-native';
import React from 'react';
import { Icon } from '../../Icons';



export const CustomInput = props => {
  const {
    keyboardType,
    Label,
    placeholder,
    LabelStyle,
    style,
    onSubmitEditing = () => {},
    onChangeText = () => {},
    value,
    onPressIn,
    editable = true,
    ref,
    autoFocus=false,
    defaultValue,
    onFocus=()=>{},
    maxLength,
    numberOfLines,
    multiline=false,
    returnKeyType
  } = props;

  return Label ? (
    <View>
      <Text style={LabelStyle}>{props.Label}</Text>

      <TextInput
      onPressIn={onPressIn}
        style={style}
        onChangeText={text => onChangeText(text)}
        onSubmitEditing={value => onSubmitEditing(value)}
        editable={editable}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        defaultValue={defaultValue}
        ref={ref}
        autoFocus={autoFocus}
        onFocus={()=>onFocus()}
        numberOfLines={numberOfLines}
        multiline={multiline}
        returnKeyType={returnKeyType}
        maxLength={maxLength}></TextInput>
    </View>
  ) : (
    <View style={props.inputView}>
      <TextInput
        onPressIn={onPressIn}
        style={style}
        onChangeText={text => onChangeText(text)}
        onSubmitEditing={value => onSubmitEditing(value)}
        value={value}
        editable={editable}
        placeholder={placeholder}
        keyboardType={keyboardType}
        ref={ref}
        maxLength={maxLength}
        returnKeyType={returnKeyType}
        autoFocus={autoFocus}></TextInput>
    </View>
  );
};
export const TextWithIcon=(props)=>{
  const {
    keyboardType,
    Label,
    placeholder,
    LabelStyle,
    style,
    onSubmitEditing = () => {},
    onChangeText = () => {},
    value,
    onPressIn,
    editable = true,
    ref,
    autoFocus,
    defaultValue,
    onPressIcon,
    FamilyName,
    IconName,
    color,
    size,
    DateStyle,
    disabled
  } = props;

  return Label ? (
    <View  >
      <Text style={LabelStyle}>{props.Label}</Text>
<View style={style}>
<Text style={DateStyle}>{value}</Text>
        <TouchableHighlight onPress={onPressIcon}  disabled={disabled}>
        <Icon
                  iconFamily={FamilyName}
                  name={
                      IconName
                  }
                  color={color}
                  size={size}
                />
        </TouchableHighlight>
       
</View>

    </View>
  ) : (
    <View>
      <View style={style}>
      <Text style={DateStyle}>{value}</Text>
        <TouchableHighlight onPress={onPressIcon} disabled={disabled}>
        <Icon
                  iconFamily={FamilyName}
                  name={
                      IconName
                  }
                  color={color}
                  size={size}
                />
        </TouchableHighlight>
       
</View>

    </View>
  );
}