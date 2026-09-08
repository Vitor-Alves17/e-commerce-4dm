import {TextHighlight, TextTitle, ContainerProducts, Scroll, BoxProduct} from "./style";
import {ProductionCard} from "./CardProduction";
import Gay from '../../assets/card-i.png'

export const ProductionSection = () => {
    return(
        <BoxProduct>
            <TextTitle>Nossos <TextHighlight>Podutos</TextHighlight></TextTitle>

            <ContainerProducts>
                <Scroll showsVerticalScrollIndicator={false}>
                    <ProductionCard title={'Gay'} price={'R$3000000,00'} image={Gay} />
                    <ProductionCard title={'Gay'} price={'R$3000000,00'} image={Gay} />
                    <ProductionCard title={'Gay'} price={'R$3000000,00'} image={Gay} />
                    <ProductionCard title={'Gay'} price={'R$3000000,00'} image={Gay} />
                </Scroll>
            </ContainerProducts>

        </BoxProduct>
    )
}