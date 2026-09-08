import {TextHighlight, TextTitle, ContainerCategory, Scroll} from "./style";
import {CardCategory} from "./CardCategory";
import JogoI from '../../assets/icons-j.png'
import EletroI from '../../assets/icon-e.png'
import CamisetasI from '../../assets/icons-c.png'
import TenisI from '../../assets/icon-t.png'

export const CategorySection = () => {
    return(
        <ContainerCategory>
            <TextTitle>Nossas <TextHighlight>Categorias</TextHighlight></TextTitle>

            <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
                <CardCategory name={'Tênis'} image={TenisI}/>
                <CardCategory name={'Eletronicos'} image={EletroI}/>
                <CardCategory name={'Camisetas'} image={CamisetasI}/>
                <CardCategory name={'Jogos'} image={JogoI}/>
            </Scroll>
            {/*<CardCategory name={'Eletrodomésticos'} image={}/>*/}
        </ContainerCategory>
    )
}