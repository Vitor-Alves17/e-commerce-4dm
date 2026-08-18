import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    title: {
       color: '#2D3133',
        fontSize: 40,
        fontWeight: 'bold',
    },
    titleBlue: {
        color: '#375EE7',
        fontSize: 40,
        fontWeight: 'bold',
    },
    logo: {
        color: '#191C1E',
        fontSize: 25,
        fontWeight: 'bold',
    },
    logowrapper: {
        flexDirection: 'row',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        width: 400,
        height: 63,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        width: 400,
        height: 63,
        backgroundColor: '#375EE7'
    }
})