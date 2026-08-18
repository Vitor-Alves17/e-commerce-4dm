import {Image, Text, View} from "react-native";
import {styles} from "./style";
import main from '../../assets/main.jpg'

export const Main = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>
                Sou Main
            </Text>
            <Image source={main} style={styles.image} />
        </View>
    )
}