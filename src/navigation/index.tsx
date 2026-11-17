import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Contact} from "../screens/Contact";
import {Home} from "../screens/Home";
import {Login} from "../screens/Login";
import {Products} from "../screens/Products";
import {Signup} from "../screens/Signup";
import type {RootStackParamList} from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="Contact" component={Contact}/>
        </Stack.Navigator>
    );
};
