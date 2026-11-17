import {Image} from "react-native";
import logo from "../../assets/logo-tipo.png";
import destaque1 from "../../assets/destaque1.png";
import destaque2 from "../../assets/destaque2.png";
import destaque3 from "../../assets/destaque3.png";
import {CategorySection} from "../../components/CategorySection";
import {ProductionSection} from "../../components/ProductionSection";
import {Screen} from "../../components/Screen";
import type {MainTabScreenProps} from "../../navigation/types";
import {Container, HighlightSection, Scroll, TextHighlight, TitleHighlight} from "./style";

export const Home = ({navigation}: MainTabScreenProps<"Home">) => {
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
            </Container>
        </Screen>
    );
};
