import {StyleSheet} from "react-native";

export const pickerStyle = StyleSheet.create({
    inputIOS: {
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderColor: '#a3d8f4',
        paddingRight: 30, // to ensure the text is never behind the icon
        borderWidth: 3,
        borderRadius: 8,
        fontSize: 20,
    },
    inputAndroid: {
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 3,
        borderColor: '#a3d8f4',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    iconContainer: {
        top: 5,
        right: 10
    }
});
