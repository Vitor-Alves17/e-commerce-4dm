import {View, Image, Text, TextInput, TouchableOpacity} from "react-native";
import logo from '../../assets/logotipo.png'
import {
    Container, ContentSignUp,
    FormButton,
    FormContainer,
    FormInput, InputContainer, LogoText,
    LogoWrapper, TextButton,
    TextLabel, TextLogin, TextLoginBlue,
    TextSpan,
    TextTitle
} from "./style";

export const Signup = () => {
    return (
        <Container>

            <ContentSignUp>
                <LogoWrapper>
                    <Image source={logo}/>
                    <LogoText>ShopSwift</LogoText>
                </LogoWrapper>
                <View>
                    <TextTitle>Crie uma conta e <TextSpan>Descubra</TextSpan></TextTitle>
                </View>
            </ContentSignUp>



            <FormContainer>
                <InputContainer>
                    <TextLabel>
                        E-mail
                    </TextLabel>
                    <FormInput/>
                </InputContainer>

                <InputContainer>
                    <TextLabel>
                        Senha
                    </TextLabel>
                    <FormInput/>
                </InputContainer>


                <FormButton>
                    <TextButton>
                        Enter
                    </TextButton>
                </FormButton>
            </FormContainer>



            <TextLogin>Já tem conta? <TextLoginBlue>Faça login</TextLoginBlue> </TextLogin>
        </Container>
    )
}