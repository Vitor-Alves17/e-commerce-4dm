import styled from "styled-components/native";

export const ScrollP = styled.View`
    width: 100%;
    gap: 30px;
    padding: 20px;
`

export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 12px;
`

export const SearchInput = styled.TextInput`
    flex: 1;
    height: 48px;
    padding: 0 14px;
    border: 1px solid #C9CDD4;
    border-radius: 7px;
    font-size: 16px;
`

export const FilterButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border: 1px solid #C9CDD4;
    border-radius: 7px;
`
