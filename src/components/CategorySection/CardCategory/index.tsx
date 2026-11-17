import {Image, type ImageSourcePropType} from "react-native";
import {CardContainer, Name} from "./style";

interface Props {
    name: string;
    image: ImageSourcePropType;
    onPress?: () => void;
}

export const CardCategory = ({name, image, onPress}: Props) => {
    return (
        <CardContainer onPress={onPress}>
            <Image source={image}/>
            <Name>{name}</Name>
        </CardContainer>
    );
};
