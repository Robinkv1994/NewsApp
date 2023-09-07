import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import TextInputWithIcon from '../TextInputs/TextInputWithIcon'
import { Icon } from '../Icons'
import { colors } from '../../Utils/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/screenResponsive'

const HomeAppBar = ({ height, backgroundColor, AppName,onPressMenu, iconName1, iconName2, IconFamily1,onPressSearch, IconFamily2 }) => {
    return (
        <View style={[styles.container, { height: height, backgroundColor: backgroundColor }]}>
           
            <View style={styles.RightView}>
                {/* <TextInputWithIcon TextinputWidth={SCREEN_WIDTH / 1.3} LefticonFamily={'AntDesign'} LefticonName={'search1'}
                    Lefticoncolor={colors.BRANDCOLOR1} Lefticonsize={20} /> */}
                <TouchableOpacity style={{width:40}}>
                    <Icon iconFamily={IconFamily1}
                        name={iconName1}
                        size={24}
                        color={colors.BRANDCOLOR2} onPress={onPressMenu}/>
                </TouchableOpacity>
                <Text style={styles.TextStyle}>{AppName}</Text>
                <TouchableOpacity onPress={ onPressSearch} style={{width:40}}>
                    <Icon iconFamily={IconFamily2}
                        name={iconName2}
                        size={24}
                        color={colors.BRANDCOLOR2} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeAppBar

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    TextStyle: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold'
    },
    RightView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH,
        padding:10
    }

})