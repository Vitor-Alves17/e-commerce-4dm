import {Image, Text, View} from "react-native";
import {styles} from "./style";
import footer from '../../assets/footer.jpg'

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>
                Sou Footer
            </Text>
            <Image source={footer} style={styles.image} />
        </View>
    )
}