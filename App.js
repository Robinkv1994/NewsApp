import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './src/Service/Navigation/RootNavigation'
import MyDrawer from './src/Service/Navigation/DrawerNavigation'

const App = () => {
  return (
    <NavigationContainer>
        <RootNavigation/>
    </NavigationContainer>
   
  )
}

export default App

