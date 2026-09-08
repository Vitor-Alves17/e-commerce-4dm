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
export const Scroll = styled.ScrollView.attrs({
    contentContainerStyle:{
        gap: 20
    }
})``

export const ContainerProducts = styled.View`
    display: grid;
    grid-template-columns: repeat(2, max-content);
`
