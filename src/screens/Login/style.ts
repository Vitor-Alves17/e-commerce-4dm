import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        gap: 32,
        padding: 20,
    },
    logoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    logoText: {
        color: "#191C1E",
        fontSize: 25,
        fontWeight: "bold",
    },
    title: {
        color: "#2D3133",
        fontSize: 36,
        fontWeight: "bold",
    },
    titleBlue: {
        color: "#375EE7",
    },
    form: {
        width: "100%",
        gap: 20,
    },
    field: {
        gap: 6,
    },
    label: {
        color: "#2D3133",
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: "#C9CDD4",
        borderRadius: 7,
        height: 56,
        paddingHorizontal: 14,
        fontSize: 16,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        height: 56,
        marginTop: 10,
        backgroundColor: "#375EE7",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    footerText: {
        textAlign: "center",
        color: "#2D3133",
        fontSize: 16,
    },
    link: {
        color: "#375EE7",
        fontWeight: "bold",
    },
});
