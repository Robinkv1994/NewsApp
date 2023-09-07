import { createStackNavigator } from "@react-navigation/stack"
import { screenNames } from "../ScreenNAmes/ScreenNames"
import TopNavigation from "./TopNavigation"
import MyDrawer from "./DrawerNavigation"
import Login from "../../Screens/LoginScreen/Login"

const MyStack =createStackNavigator()

export default function(){
    return(
        <MyStack.Navigator screenOptions={{
            headerShown:false
        }}>
            <MyStack.Screen name={screenNames.Login} component={Login}/>
            <MyStack.Screen name={screenNames.topTab} component={TopNavigation}/>
            <MyStack.Screen name={screenNames.MyDrawer} component={MyDrawer}/>

        </MyStack.Navigator>
    )
}

