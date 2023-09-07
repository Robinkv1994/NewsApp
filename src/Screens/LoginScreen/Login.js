import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  ToastAndroid
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/screenResponsive';
import { colors } from '../../Utils/colors';
import TextInputs from '../../Components/TextInput/TextInput';
import Button, { CustomButton } from '../../Components/Button';
import { screenNames } from '../../Service/ScreenNAmes/ScreenNames';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(false);
  const navigation = useNavigation()
  const handleLogin = () => {
    if (username ) {
      navigation.replace(screenNames.MyDrawer, {
        profilename: username
      })
    } else {
      ToastAndroid.show('Please enter a  username ', ToastAndroid.LONG)
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.circleView1}></View>
        <Image
          source={require('../../assets/Newsapp.png')}
          style={styles.imagestyle}></Image>

        <View style={styles.childContainer}>
        <Text style={styles.textstyle}>News hunt! Explore all news  </Text>
          <Text style={styles.textstyle}>Please enter your name to explore new News </Text>
          <TextInputs
            width={SCREEN_WIDTH / 1.2}
            placeholder={'UserName'}
            Name={'person'}
            value={username}
            onChangeText={text => {
              const regexText = text.replace(/[^a-zA-Z0-9]/g, '');
              setUsername(regexText)
            }}
          />
          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>

            <Button label={'Get started'} onpress={handleLogin} />
          </View>
        </View>
        <View style={styles.brandstyle}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: colors.TEXTCOLOR, fontSize: 12 }}>
              Need Help?
            </Text>
            <TouchableOpacity >
              <Text style={{ color: 'blue', fontSize: 12 }}> Click Here</Text>
            </TouchableOpacity>
          </View>


        </View>

        <View style={styles.circleView2}></View>
      </View>
    </TouchableWithoutFeedback>
  );
}


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  childContainer: {
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WIDTH / 1.09,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 12,
  },
  textstyle: {
    fontSize: 14,
    // fontWeight: 'bold',
    margin: 14,
    fontWeight:'bold',
    color: colors.TEXTCOLOR,
    fontFamily: 'Poppins-Bold',
  },
  imagestyle: {
    height: 110,
    width: 110,
  },
  circleView2: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 2,
    backgroundColor: colors.BRANDCOLOR2,
    // borderRadius: 100,
    // marginLeft: -400,
    borderTopRightRadius: 200,
    borderBottomRightRadius: 200,
    alignSelf: 'flex-start',
  },
  circleView1: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 2,
    backgroundColor: colors.BRANDCOLOR2,
    borderTopLeftRadius: 200,
    borderBottomLeftRadius: 200,
    alignSelf: 'flex-end',
  },
  brandstyle: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
  },
  resetbtnView: {
    marginLeft: 10,
    height: SCREEN_HEIGHT / 20,
    width: SCREEN_WIDTH / 3.5,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 8,
  },
  resetbtn: {
    fontSize: 12,
    color: '#000',
  },

});
