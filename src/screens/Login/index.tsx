import {View, Image, Text, TextInput, TouchableOpacity} from "react-native";
// @ts-ignore
import logo from '../../assets/logotipo.png'
import {styles} from "./style";

export const Login = () => {
    return (
        <View>
            <View style={styles.logowrapper}>
                <Image source={logo}/>
                <Text style={styles.logo}>ShopSwift</Text>
            </View>
            <View>
                <Text style={styles.title}>Faça login e <Text style={styles.titleBlue}>Descubra</Text></Text>
            </View>

           <View>
               <Text>
                   E-mail
               </Text>
               <TextInput style={styles.input}/>

               <Text>
                   Senha
               </Text>
               <TextInput style={styles.input}/>

               <TouchableOpacity style={styles.button}>
                   <Text>Enter</Text>
               </TouchableOpacity>
           </View>

            <Text> <Text></Text></Text>
        </View>
    )
}