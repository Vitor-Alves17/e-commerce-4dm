import {Image, Text, View} from "react-native";
import {styles} from "./style";
import header from '../../assets/header.jpg'

export const Header = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>
                Sou Header
            </Text>
            <Image source={header} style={styles.image} />
        </View>
    )
}