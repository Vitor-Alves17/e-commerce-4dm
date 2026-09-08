import {Buttone, CardBody, Content, Img, Price, Sell, Title} from "./style";
import {ImageSourcePropType, Image} from "react-native";
import buttonI from '../../../assets/button-add.png'


interface ICard {
    title: string;
    price: string;
    image: ImageSourcePropType;
}

export const ProductionCard = (props: ICard) => {
    return (
        <CardBody>
            <Img source={props.image} />
            <Content>
                <Title>{props.title}</Title>
                <Sell>
                    <Price>{props.price}</Price>
                    <Buttone>
                        <Image source={buttonI}/>
                    </Buttone>
                </Sell>
            </Content>
        </CardBody>
    )
}