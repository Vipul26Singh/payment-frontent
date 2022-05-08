import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { ThemeContext } from "styled-components/native";
import { StyledText, StyledView, StyledStatusBar, StyledButton } from "components/Basic"

const HomeBackup = ({ navigation }) => {
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        root: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontSize: 24,
            marginBottom: 20,
        },
    })

    return (
        <View style={styles.root}>
            <StatusBar barStyle="light-content" />
            <StyledText color="primary">Hello World!</StyledText>

            <StyledText color="primary" fontSize={1}>Home</StyledText>
            <Button
                title="Go to Details"
                color="white"
                backgroundColor={theme.colors.lightPurple}
                onPress={() => {
                    navigation.navigate('Details', { from: 'Home' })
                }}
            />
        </View>
    )
}

Home.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
}

Home.defaultProps = {
    navigation: { navigate: () => null },
}

export default HomeBackup
