import styled from "styled-components/native";

export const Container = styled.View`
    gap: 40px;
    padding: 20px;
`

export const HighlightSection = styled.View`
    gap: 5px;
`

export const TitleHighlight = styled.Text`
    font-size: 25px;
    font-weight: 700;
`

export const TextHighlight = styled.Text`
    color: #375ee7;
`

export const Scroll = styled.ScrollView.attrs({
    contentContainerStyle: {
        gap: 20,
    },
})``

export const Actions = styled.View`
    gap: 12px;
    padding-bottom: 20px;
`

export const PrimaryButton = styled.TouchableOpacity`
    align-items: center;
    padding: 15px;
    border-radius: 7px;
    background-color: #375ee7;
`

export const PrimaryButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
`

export const SecondaryButton = styled.TouchableOpacity`
    align-items: center;
    padding: 15px;
    border: 1px solid #375ee7;
    border-radius: 7px;
`

export const SecondaryButtonText = styled.Text`
    color: #375ee7;
    font-size: 16px;
    font-weight: 700;
`
