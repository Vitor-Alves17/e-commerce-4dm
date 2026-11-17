import {Image, Text} from "react-native";
import {Buttone, CardBody, Content, Img, Price, Sell, Title} from "./style";
import buttonI from "../../../assets/button-add.png";

interface ICard {
    title: string;
    price: string;
    image: string;
}

export const ProductionCard = (props: ICard) => {
    return (
        <CardBody>
            <Img source={{uri: props.image}} resizeMode="contain"/>
            <Content>
                <Title numberOfLines={2}>{props.title}</Title>
                <Sell>
                    <Price>{props.price}</Price>
                    <Buttone accessibilityRole="button" accessibilityLabel="Adicionar ao carrinho">
                        <Image source={buttonI}/>
                    </Buttone>
                </Sell>
            </Content>
        </CardBody>
    );
};
