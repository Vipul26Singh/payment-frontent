import React, { useContext } from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { ThemeContext } from "styled-components/native";


// stack navigators
import { HomeNavigator, ProfileNavigator } from '../Stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const theme = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return (
                <FontIcon
                  name="home"
                  color={focused ? theme.colors.lightPurple : theme.colors.gray}
                  size={20}
                  solid
                />
              )
            case 'Profile':
              return (
                <FontIcon
                  name="user"
                  color={focused ? theme.colors.lightPurple : theme.colors.gray}
                  size={20}
                  solid
                />
              )
            default:
              return <View />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.lightPurple,
        inactiveTintColor: theme.colors.gray,
        style: {
          // backgroundColor: 'white',
          // borderTopColor: 'gray',
          // borderTopWidth: 1,
          // paddingBottom: 5,
          // paddingTop: 5,
        },
      }}
      initialRouteName="Home"
      swipeEnabled={false}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigator
