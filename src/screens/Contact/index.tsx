import {Alert, Image} from "react-native";
import logo from "../../assets/logo-tipo.png";
import map from "../../assets/map.png";
import {Screen} from "../../components/Screen";
import {
    BtnText,
    ContactContainer,
    Form,
    FormButton,
    FormContainer,
    FormText,
    InputG,
    InputP,
    MapContainer,
    TextHighlight,
    Title,
} from "./style";

export const Contact = () => {
    return (
        <Screen>
            <ContactContainer>
                <Image source={logo}/>

                <FormContainer>
                    <Title>
                        Mande uma <TextHighlight>Mensagem</TextHighlight>
                    </Title>

                    <Form>
                        <FormText>Nome:</FormText>
                        <InputP placeholder="Seu nome" placeholderTextColor="#9AA0A6"/>
                    </Form>

                    <Form>
                        <FormText>Assunto:</FormText>
                        <InputP placeholder="Qual o assunto?" placeholderTextColor="#9AA0A6"/>
                    </Form>

                    <Form>
                        <FormText>Mensagem:</FormText>
                        <InputG
                            placeholder="Escreva sua mensagem"
                            placeholderTextColor="#9AA0A6"
                            multiline
                            textAlignVertical="top"
                        />
                    </Form>

                    <FormButton
                        onPress={() => Alert.alert("Mensagem enviada", "Entraremos em contato em breve.")}
                    >
                        <BtnText>Enviar</BtnText>
                    </FormButton>
                </FormContainer>

                <MapContainer>
                    <Title>
                        Venha nos <TextHighlight>Visitar</TextHighlight>
                    </Title>
                    <Image source={map}/>
                </MapContainer>
            </ContactContainer>
        </Screen>
    );
};
