import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { screenNames } from "../ScreenNAmes/ScreenNames";
import Home from "../../Screens/TopTabScreen/HomeScreen/Home";
import Showbiz from "../../Screens/TopTabScreen/Showbiz/Showbiz";
import News from "../../Screens/TopTabScreen/News/News";
import StyleScreen from "../../Screens/TopTabScreen/Style/StyleScreen";
import HomeAppBar from "../../Components/HomescreenAppBar/HomeAppBar";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../Utils/screenResponsive";
import { colors } from "../../Utils/colors";
import TextInputs from "../../Components/TextInput/TextInput";
import { CustomInput } from "../../Components/TextInputs/TextInput";
import { useState } from "react";
import TextInputWithIcon from "../../Components/TextInputs/TextInputWithIcon";

import { useRoute, useNavigation } from '@react-navigation/native';

const TopTab = createMaterialTopTabNavigator()


const TopNavigation = () => {
    const [searchClick, setSearchClick] = useState(false)
    const [searchText, setSearchText] = useState('')
    const navigation = useNavigation()
    const handleSearch = () => {
        navigation.navigate(screenNames.home, { searchText: searchText });
    };

    return (
        <>
            <HomeAppBar height={SCREEN_HEIGHT / 8} IconFamily1={'Entypo'} iconName1={'menu'} onPressMenu={() => navigation.toggleDrawer()}
                IconFamily2={'AntDesign'} iconName2={searchClick ? 'close' : 'search1'} onPressSearch={() => setSearchClick(!searchClick)} AppName={'News app'} backgroundColor={'#fff'} />
            {searchClick && (
                <TextInputWithIcon placeholder={'Search news'}
                    RightIconFamily={'AntDesign'}
                    RightIconcolor={colors.BRANDCOLOR2}
                    RightIconName={'search1'}
                    RightIconSize={22}
                    value={searchText}
                    onChangeText={(text) => {
                        setSearchText(text)
                        handleSearch()
                    }}
                />

            )}

            <TopTab.Navigator screenOptions={{
                tabBarInactiveTintColor: 'grey',
                tabBarActiveTintColor: colors.BRANDCOLOR2
            }}>
                <TopTab.Screen name={screenNames.home} component={Home} />
                <TopTab.Screen name={screenNames.Showbiz} component={Showbiz} />

                <TopTab.Screen name={screenNames.News} component={News} />

                <TopTab.Screen name={screenNames.styles} component={StyleScreen} />

            </TopTab.Navigator>
        </>

    )
}

export default TopNavigation