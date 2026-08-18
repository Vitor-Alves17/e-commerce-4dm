import {Button, Text, TextInput, Image, Pressable, TouchableOpacity, Animated} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import Frieren from './assets/frieren-winter-mountain-anime-wallpaper-4k-card.webp'
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {styles} from "./components/Card/style";
import ScrollView = Animated.ScrollView;
import {Login} from "./screens/login";

export default function App() {
    const Lucas = () => {
        alert('Lucas gosta')
    }

  return (
   <SafeAreaView>
      {/*<Pressable onPress={() => {alert('Lyan')}}>*/}
      {/*    <Text>*/}
      {/*        Gay*/}
      {/*    </Text>*/}
      {/*</Pressable>*/}
      {/* <Pressable onPress={() => {alert('Nath')}}>*/}
      {/*     <Text>*/}
      {/*         Bi*/}
      {/*     </Text>*/}
      {/* </Pressable>*/}
      {/* <Pressable onPress={() => {alert(Lucas())}}>*/}
      {/*     <Text>*/}
      {/*         Trans*/}
      {/*     </Text>*/}
      {/* </Pressable>*/}

       {/*<TouchableOpacity onPress={Lucas}>*/}
       {/*    <Text>*/}
       {/*        Trans*/}
       {/*    </Text>*/}
       {/*</TouchableOpacity>*/}
       {/*<TouchableOpacity onPress={() => {alert('Lyan')}}>*/}
       {/*    <Text>Gay</Text>*/}
       {/*</TouchableOpacity>*/}
       {/*<TouchableOpacity onPress={() => {alert('Nath')}}>*/}
       {/*    <Text>Bi</Text>*/}
       {/*</TouchableOpacity>*/}

       {/*<ScrollView>*/}
       {/*    <Card/>*/}
       {/*    <Header/>*/}
       {/*    <Main/>*/}
       {/*    <Footer/>*/}
       {/*</ScrollView>*/}

       <Login/>
   </SafeAreaView>
  );
}

