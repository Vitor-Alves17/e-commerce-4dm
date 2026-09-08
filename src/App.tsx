import {SafeAreaView} from "react-native-safe-area-context";
import {Signup} from "./screens/Signup";
import {Home} from "./screens/Home";

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

       {/*<Login/>*/}

       {/*<Signup />*/}
       <Home/>
   </SafeAreaView>
  );
}

