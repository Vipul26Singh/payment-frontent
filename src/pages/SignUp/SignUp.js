import React, { useContext } from 'react'
import { StyledText, StyledView, StyledStatusBar, StyledButton, PrimaryText } from "components/Basic"
import { SafeAreaView } from 'react-native'

const SignUp = ({ navigation }) => {

    return (
        <SafeAreaView>
            <StyledStatusBar barStyle="light-content" />
            <PrimaryText >Hello World!</PrimaryText>

            <StyledText color="primary">Home</StyledText>
            <StyledButton
                title="Go to Details"
                bg="primary"
                color="white"
                onPress={() => {
                    navigation.navigate('Details', { from: 'Home' })
                }}
            />
        </SafeAreaView>
    )
}


export default SignUp
