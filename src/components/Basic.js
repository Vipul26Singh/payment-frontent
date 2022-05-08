import styled from 'styled-components/native'
import { typography, space, color } from 'styled-system'


export const StyledView = styled.View`
  ${color};
  ${typography};
  ${space};
`

export const StyledText = styled.Text`
  ${color};
  ${typography};
  ${space};
`

export const PrimaryText = styled(StyledText)`
  color: "primary"
`

export const StyledStatusBar = styled.StatusBar`
    ${color};
    ${typography};
    ${space};
`
export const StyledButton = styled.Button`
    ${color};
    ${typography};
    ${space};
`

export const PrimaryButton = styled(StyledButton)`
    backgroundColor: "primary"
`;