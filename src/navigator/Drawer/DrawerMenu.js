import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text } from 'react-native'

import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { ThemeContext } from "styled-components/native";
import { typography } from "styled-system";

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const DrawerMenu = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.head}>
        <FontIcon.Button
          name="times"
          size={20}
          color={theme.colors.gray}
          backgroundColor="white"
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer())
          }}
        />
      </View>
      <View ml="40">
        <Text>Drawer Menu</Text>
      </View>
    </SafeAreaView >
  )
}

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
