import {Image} from "react-native";
import logo from "../../assets/logotipo.png";
import {Screen} from "../../components/Screen";
import type {RootStackScreenProps} from "../../navigation/types";
import {
    Container,
    ContentSignUp,
    FormButton,
    FormContainer,
    FormInput,
    InputContainer,
    LogoText,
    LogoWrapper,
    TextButton,
    TextLabel,
    TextLogin,
    TextLoginBlue,
    TextSpan,
    TextTitle,
} from "./style";

export const Signup = ({navigation}: RootStackScreenProps<"Signup">) => {
    return (
        <Screen contentContainerStyle={{flexGrow: 1}}>
            <Container>
                <ContentSignUp>
                    <LogoWrapper>
                        <Image source={logo}/>
                        <LogoText>ShopSwift</LogoText>
                    </LogoWrapper>

                    <TextTitle>
                        Crie uma conta e <TextSpan>Descubra</TextSpan>
                    </TextTitle>
                </ContentSignUp>

                <FormContainer>
                    <InputContainer>
                        <TextLabel>E-mail</TextLabel>
                        <FormInput
                            placeholder="voce@email.com"
                            placeholderTextColor="#9AA0A6"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </InputContainer>

                    <InputContainer>
                        <TextLabel>Senha</TextLabel>
                        <FormInput
                            placeholder="********"
                            placeholderTextColor="#9AA0A6"
                            secureTextEntry
                        />
                    </InputContainer>

                    <FormButton
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [{name: "Home"}],
                            })
                        }
                    >
                        <TextButton>Criar conta</TextButton>
                    </FormButton>
                </FormContainer>

                <TextLogin>
                    Já tem conta?{" "}
                    <TextLoginBlue onPress={() => navigation.navigate("Login")}>
                        Faça login
                    </TextLoginBlue>
                </TextLogin>
            </Container>
        </Screen>
    );
};
