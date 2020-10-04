import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export const contentStyles = StyleSheet.create({
    wholeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        backgroundColor: "#9ab3f5",
        width: "30%",
        borderRadius: 5,
        padding: 12,
        height: 250,
        marginRight: "5%",
    },
    textInput: {
        borderRadius: 8,
        borderWidth: 3,
        borderStyle: 'solid',
        fontSize: 20,
        borderColor: '#a3d8f4',
        marginBottom: 10,
    },
    informationInput: {
        width: "25%",
        padding: 10,
        flexDirection: "column",
        justifyContent: "flex-start"

    },
    buttonApply: {
        backgroundColor: "#a3d8f4",
        padding: 10,
        width: "50%",
        alignItems: 'center',
        alignSelf: 'center',
    },
    detailTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    infoText: {
        fontSize: 20,
        marginBottom: 10,
    },
    infoScrollView: {
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 5
    }
});
