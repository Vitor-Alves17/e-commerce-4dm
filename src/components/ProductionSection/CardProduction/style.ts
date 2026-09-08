import styled from "styled-components/native";

export const CardBody = styled.View`
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 190px;
    height: 229px;
`

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 700;
`

export const Price = styled.Text`
    color: #375ee7;
    font-weight: 700;
`
export const Content = styled.View`
    flex-direction: column;
    padding: 10px;
    gap: 10px;
`

export const Sell = styled.View`
    flex-direction: row;
    gap: 39px;
`

export const Buttone = styled.TouchableOpacity`
    background-color: #375ee7;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
`
export const Img = styled.Image`
    width: 188px;
    height: 111px;
`