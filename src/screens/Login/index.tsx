import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import logo from "../../assets/logotipo.png";
import {Screen} from "../../components/Screen";
import type {RootStackScreenProps} from "../../navigation/types";
import {styles} from "./style";

export const Login = ({navigation}: RootStackScreenProps<"Login">) => {
    return (
        <Screen contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    <Image source={logo}/>
                    <Text style={styles.logoText}>ShopSwift</Text>
                </View>

                <Text style={styles.title}>
                    Faça login e <Text style={styles.titleBlue}>Descubra</Text>
                </Text>

                <View style={styles.form}>
                    <View style={styles.field}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="voce@email.com"
                            placeholderTextColor="#9AA0A6"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="********"
                            placeholderTextColor="#9AA0A6"
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [{name: "Home"}],
                            })
                        }
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.footerText}>
                    Não tem conta?{" "}
                    <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
                        Cadastre-se
                    </Text>
                </Text>
            </View>
        </Screen>
    );
};
