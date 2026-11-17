import {CardCategory} from "./CardCategory";
import JogoI from "../../assets/icons-j.png";
import EletroI from "../../assets/icon-e.png";
import CamisetasI from "../../assets/icons-c.png";
import TenisI from "../../assets/icon-t.png";
import {ContainerCategory, Scroll, TextHighlight, TextTitle} from "./style";

interface Props {
    onSelect?: () => void;
}

export const CategorySection = ({onSelect}: Props) => {
    return (
        <ContainerCategory>
            <TextTitle>
                Nossas <TextHighlight>Categorias</TextHighlight>
            </TextTitle>

            <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
                <CardCategory name="Tênis" image={TenisI} onPress={onSelect}/>
                <CardCategory name="Eletrônicos" image={EletroI} onPress={onSelect}/>
                <CardCategory name="Camisetas" image={CamisetasI} onPress={onSelect}/>
                <CardCategory name="Jogos" image={JogoI} onPress={onSelect}/>
            </Scroll>
        </ContainerCategory>
    );
};
