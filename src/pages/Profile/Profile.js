import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { ThemeContext } from "styled-components/native";



const Profile = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.light,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
  })
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Profile</Text>
      <Button
        title="Go to Details"
        color="white"
        backgroundColor={theme.colors.lightPurple}
        onPress={() => {
          navigation.navigate('Details', { from: 'Profile' })
        }}
      />
    </View>
  )
}

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
