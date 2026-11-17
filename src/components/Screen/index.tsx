import type {ReactNode} from "react";
import {ScrollView, StyleSheet, View, type StyleProp, type ViewStyle} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

interface ScreenProps {
    children: ReactNode;
    scroll?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
}

export const Screen = ({children, scroll = true, contentContainerStyle}: ScreenProps) => {
    return (
        <SafeAreaView style={styles.safeArea} edges={["top", "bottom", "left", "right"]}>
            {scroll ? (
                <ScrollView
                    contentContainerStyle={contentContainerStyle}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    {children}
                </ScrollView>
            ) : (
                <View style={styles.content}>{children}</View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    content: {
        flex: 1,
    },
});
