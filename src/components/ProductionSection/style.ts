import styled from "styled-components/native";

export const BoxProduct = styled.View`
    gap: 10px;
`

export const TextTitle = styled.Text`
    font-size: 25px;
    font-weight: 700;
`

export const TextHighlight = styled.Text`
    color: #375ee7;
`

export const ContainerProducts = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
`

export const EmptyText = styled.Text`
    color: #6B7280;
    font-size: 16px;
`

export const ErrorText = styled.Text`
    color: #DC2626;
    font-size: 16px;
`

export const RetryButton = styled.TouchableOpacity`
    align-items: center;
    align-self: flex-start;
    padding: 10px 16px;
    border: 1px solid #375ee7;
    border-radius: 7px;
`

export const RetryText = styled.Text`
    color: #375ee7;
    font-size: 15px;
    font-weight: 700;
`
