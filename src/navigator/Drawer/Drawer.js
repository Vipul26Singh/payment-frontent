import React, { useContext } from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../Tabs'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Home')

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#056348' }}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

export default () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Home2" component={TabNavigator} />
  </Drawer.Navigator>
)
