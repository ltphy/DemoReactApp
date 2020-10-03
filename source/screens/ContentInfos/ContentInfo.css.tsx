import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export const contentStyles = StyleSheet.create({
    wholeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        backgroundColor: "#7579e7",
        width: "30%",
        borderRadius: 5,
        padding: 12,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    informationInput: {
        width: "25%",
        padding: 10,
        marginLeft: 20,
        flexDirection:"column",
        justifyContent:"flex-start"

    },
    buttonApply: {
        backgroundColor:"#a3d8f4",
        padding: 10,
        width: "50%",
        alignItems: 'center',
        alignSelf:'center',
    },

});

export const pickerStyle = {
    inputIOS: {
        color: 'white',
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
    },
    inputAndroid: {
        color: 'black',
        borderColor: "#a3d8f4",
        borderRadius: 5,
    },

    underline: { borderTopWidth: 0 },
    icon: {
        position: 'absolute',
        backgroundColor: '#a3d8f4',
        borderTopWidth: 5,
        borderTopColor: '#00000099',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        width: 0,
        height: 0,
        top: 20,
        right: 15,
    },
};
