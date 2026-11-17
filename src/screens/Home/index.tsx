import {Image} from "react-native";
import logo from "../../assets/logo-tipo.png";
import destaque1 from "../../assets/destaque1.png";
import destaque2 from "../../assets/destaque2.png";
import destaque3 from "../../assets/destaque3.png";
import {CategorySection} from "../../components/CategorySection";
import {ProductionSection} from "../../components/ProductionSection";
import {Screen} from "../../components/Screen";
import type {RootStackScreenProps} from "../../navigation/types";
import {
    Actions,
    Container,
    HighlightSection,
    PrimaryButton,
    PrimaryButtonText,
    Scroll,
    SecondaryButton,
    SecondaryButtonText,
    TextHighlight,
    TitleHighlight,
} from "./style";

export const Home = ({navigation}: RootStackScreenProps<"Home">) => {
    return (
        <Screen>
            <Container>
                <Image source={logo}/>

                <HighlightSection>
                    <TitleHighlight>
                        Nossos <TextHighlight>Destaques</TextHighlight>
                    </TitleHighlight>
                </HighlightSection>

                <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image source={destaque1}/>
                    <Image source={destaque2}/>
                    <Image source={destaque3}/>
                </Scroll>

                <CategorySection onSelect={() => navigation.navigate("Products")}/>

                <ProductionSection/>

                <Actions>
                    <PrimaryButton onPress={() => navigation.navigate("Products")}>
                        <PrimaryButtonText>Ver todos os produtos</PrimaryButtonText>
                    </PrimaryButton>

                    <SecondaryButton onPress={() => navigation.navigate("Contact")}>
                        <SecondaryButtonText>Fale conosco</SecondaryButtonText>
                    </SecondaryButton>
                </Actions>
            </Container>
        </Screen>
    );
};
