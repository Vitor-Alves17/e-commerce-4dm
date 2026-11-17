import {Image, Text, TouchableOpacity, View} from "react-native";
import main from "../../assets/main.jpg";
import {styles} from "./style";

export const SectionAbout = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Sobre nós</Text>
            <Image source={main} style={styles.image} resizeMode="cover"/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Saiba mais</Text>
            </TouchableOpacity>
        </View>
    );
};
