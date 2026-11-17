import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Text} from "react-native";
import {Contact} from "../screens/Contact";
import {Home} from "../screens/Home";
import {Login} from "../screens/Login";
import {Products} from "../screens/Products";
import {Signup} from "../screens/Signup";
import type {MainTabParamList, RootStackParamList} from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const tabIcons: Record<keyof MainTabParamList, string> = {
    Home: "🏠",
    Products: "🛍️",
    Contact: "✉️",
};

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarActiveTintColor: "#375EE7",
                tabBarInactiveTintColor: "#6B7280",
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                },
                tabBarIcon: ({focused}) => (
                    <Text style={{fontSize: 18, opacity: focused ? 1 : 0.55}}>
                        {tabIcons[route.name]}
                    </Text>
                ),
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{title: "Início"}}/>
            <Tab.Screen name="Products" component={Products} options={{title: "Produtos"}}/>
            <Tab.Screen name="Contact" component={Contact} options={{title: "Contato"}}/>
        </Tab.Navigator>
    );
};

export const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Main" component={MainTabs}/>
        </Stack.Navigator>
    );
};
