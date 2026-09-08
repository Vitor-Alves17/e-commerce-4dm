import {Name, Viiew} from "./style";
import {styles} from "../../Card/style";
import {ImageSourcePropType, Image} from "react-native";

interface Props {
    name: string;
    image: ImageSourcePropType;
}

export const CardCategory = (props: Props) => {
    return (
        <Viiew>
            <Image source={props.image}/>
            <Name>{props.name}</Name>
        </Viiew>
    )
}