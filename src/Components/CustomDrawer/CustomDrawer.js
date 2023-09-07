import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/screenResponsive'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRoute ,useNavigation} from '@react-navigation/native';
import { screenNames } from '../../Service/ScreenNAmes/ScreenNames';

const CustomDrawer = () => {
const navigation = useNavigation()
    const route=useRoute()
    const profilename=route.params?.profilename
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image source={require('../../assets/propic.jpg')} style={styles.profileView} />
                <Text style={styles.ProfileName}>{profilename}</Text>
            </View>

            <View style={styles.childContainer}>
                <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonText}>News</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonView} onPress={()=>navigation.navigate(screenNames.settings)}>
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonView} onPress={()=>navigation.navigate(screenNames.Login)}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {


    },
    profileView: {
        width: SCREEN_WIDTH / 2.5,
        height: SCREEN_HEIGHT / 6,
        borderRadius: 100,
        marginTop: 10
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProfileName: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold'
    },
    childContainer: {
        textAlign: 'left',
        marginHorizontal: 10
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        marginHorizontal: 20
    },
    buttonView: {
        padding: 10,
        borderBottomWidth:1,
        width:'100%'
    }
})