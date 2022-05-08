import React, { useContext } from 'react'
import { StyledText, StyledView, StyledStatusBar, StyledButton } from "components/Basic"
import { SafeAreaView } from 'react-native'

const Home = ({ navigation }) => {

  return (
    <SafeAreaView>
      <StyledView ml={3} mt={5}>
        <StyledText fontSize={1} color="primary">Hello there,</StyledText>
        <StyledText fontSize={1} color="primary">Welcome to Qpay</StyledText>
      </StyledView>
    </SafeAreaView>
  )
}


export default Home
