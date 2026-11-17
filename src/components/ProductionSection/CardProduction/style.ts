import styled from "styled-components/native";

export const CardBody = styled.View`
    flex-direction: column;
    align-items: center;
    width: 48%;
    min-height: 229px;
    overflow: hidden;
    border: 1px solid #E5E7EB;
    border-radius: 7px;
    background-color: #FFFFFF;
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
    gap: 10px;
    padding: 10px;
`

export const Sell = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`

export const Buttone = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: #375ee7;
`

export const Img = styled.Image`
    width: 100%;
    height: 111px;
`
