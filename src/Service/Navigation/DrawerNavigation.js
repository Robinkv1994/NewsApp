import { createDrawerNavigator } from "@react-navigation/drawer";
import { screenNames } from "../ScreenNAmes/ScreenNames";
import Settings from "../../Screens/DrawerScreen/Settings";
import Home from "../../Screens/TopTabScreen/HomeScreen/Home";
import TopNavigation from "./TopNavigation";
import CustomDrawer from "../../Components/CustomDrawer/CustomDrawer";





const MyDrawer=()=>{
    const Drawer=createDrawerNavigator()
    return(
        <Drawer.Navigator screenOptions={{
            headerShown:false
            
        }}
        
        drawerContent={(props)=><CustomDrawer {...props}/>}>
            <Drawer.Screen name={screenNames.topTab} component={TopNavigation}/>
        </Drawer.Navigator>
    )
}


export default MyDrawer