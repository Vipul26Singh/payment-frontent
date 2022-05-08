import React, { useContext } from 'react'
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from '@react-navigation/stack'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Details from 'pages/Details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()



// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => {
  const theme = useContext(ThemeContext);
  const navigationProps = {
    headerTintColor: "theme.colors.light",
    headerStyle: { backgroundColor: theme.colors.primary },
    headerTitleStyle: { fontSize: 18 },
  }

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
    </Stack.Navigator>
  )
}

export const ProfileNavigator = () => {
  const theme = useContext(ThemeContext);
  const navigationProps = {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: theme.colors.primary },
    headerTitleStyle: { fontSize: 18 },
  }

  return (
    <Stack.Navigator
      initialRouteName="Profile"
      headerMode="screen"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: 'Profile',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  )
}
