import type {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native";
import type {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import type {NativeStackScreenProps} from "@react-navigation/native-stack";

export type MainTabParamList = {
    Home: undefined;
    Products: undefined;
    Contact: undefined;
};

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Main: NavigatorScreenParams<MainTabParamList> | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<MainTabParamList, T>,
        NativeStackScreenProps<RootStackParamList>
    >;
