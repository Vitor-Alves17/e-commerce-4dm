import {Container, HighlightSection, Scroll, TextHighlight, TitleHighlight} from "./style";
import {Image, ScrollView} from "react-native";
// @ts-ignore
import logo from "../../assets/logo-tipo.png"
import destaque from '../../assets/destaque1.png'
import destaque2 from '../../assets/destaque2.png'
import destaque3 from '../../assets/destaque3.png'
import {CategorySection} from "../../components/CategorySection";
import {ProductionSection} from "../../components/ProductionSection";


export const Home = () => {
    return (
        <Container>
            <Image source={logo} />

            <HighlightSection>
                <TitleHighlight>Nossos <TextHighlight>Destaques</TextHighlight></TitleHighlight>
            </HighlightSection>

            <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
                <Image source={destaque} />
                <Image source={destaque2} />
                <Image source={destaque3} />
            </Scroll>

            {/*<TitleHighlight>Nossas <TextHighlight>Categorias</TextHighlight></TitleHighlight>*/}

            <CategorySection/>

            S
            <ProductionSection/>

        </Container>
    )
}