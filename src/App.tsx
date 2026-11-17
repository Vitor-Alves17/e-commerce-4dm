import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ProductsProvider} from "./contexts/ProductsContext";
import {RootNavigator} from "./navigation";

export default function App() {
    return (
        <SafeAreaProvider>
            <ProductsProvider>
                <StatusBar style="dark"/>
                <NavigationContainer>
                    <RootNavigator/>
                </NavigationContainer>
            </ProductsProvider>
        </SafeAreaProvider>
    );
}
