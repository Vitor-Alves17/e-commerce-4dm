import {StyleSheet} from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
    title: {
        color: '#2D3133',
        fontSize: 40,
        fontWeight: 'bold',
    },
    titleBlue: {
        color: '#375EE7',
        fontSize: 40,
        fontWeight: 'bold',
    },
    logo: {
        color: '#191C1E',
        fontSize: 25,
        fontWeight: 'bold',
    },
    logowrapper: {
        flexDirection: 'row',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        width: 400,
        height: 63,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        width: 400,
        height: 63,
        backgroundColor: '#375EE7'
    }
})

export const TextTitle = styled.Text`
    color: #2D3133;
    font-size: 40px;
    font-weight: bold;
`
export const TextSpan = styled.Text`
    color: #375EE7;
    font-size: 40px;
    font-weight: bold;
`
export const LogoText = styled.Text`
    color: #191C1E;
    font-size: 25px;
    font-weight: bold;
`
export const LogoWrapper = styled.View`
    flex-direction: row;
`
export const FormInput = styled.TextInput`
    border-width: 1px;
    border-color: black;
    border-radius: 7px;
    width: 400px;
    height: 63px;
`
export const FormButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: black;
    border-radius: 7px;
    width: 400px;
    height: 63px;
    background-color: #375EE7;
`

export const FormContainer = styled.View`
    gap: 40px;
    width: 100%;
`
export const InputContainer = styled.View`
    gap: 0;
`

export const TextLabel = styled.TextInput`
    font-size: 20px;
`
export const Container = styled.View`
    padding: 20px 10px 20px 10px;
    gap: 110px;
`
export const ContentSignUp = styled.View`
    gap: 40px;
`
export const TextButton = styled.Text`
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
`

export const TextLogin = styled.Text`
    font-size: 16px;
    font-align: center;
`

export const TextLoginBlue = styled.Text`
    font-size: 16px;
    font-align: center;
    color: #375EE7;
`