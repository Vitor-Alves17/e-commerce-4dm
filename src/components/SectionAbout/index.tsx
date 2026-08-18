import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style";

export const SectionAbout = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>
                Sou SectionAbout
            </Text>
            <Image source={} style={styles.image} />
            <TouchableOpacity>
                <Text>
                   Clique
                </Text>
            </TouchableOpacity>
        </View>
    )
}