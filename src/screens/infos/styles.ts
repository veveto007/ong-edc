import { StyleSheet } from "react-native";

export const styleInfo = StyleSheet.create({

    container: {
        
        flex: 1,
        minHeight: 1500,
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e4b6e'
        
    },

    cardpai: {
        
        flex: 1,
        width: 420,
        height: 'auto',
        minHeight: 1500,
        alignItems: "center",
        // backgroundColor: 'orange',
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        borderRadius: 12,
        marginBottom: 70,
        top: 30
    },

    cardinfo: {

        width: 320,
        height: 'auto',
        minHeight: 150,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100
    },

    text_tit: {

        fontSize: 22,
        color: 'white',
        margin: 20,
        top: 10,
        textTransform: "uppercase",
        fontFamily: "Lucky"
    },

    text_dent: {

        margin: 35,
        fontSize: 16,
        textAlign: "justify",
        fontFamily: "Poppins",
    },

    text_tit2: {

        fontSize: 22,
        color: "#1b72cf",
        textTransform: "uppercase",
        fontFamily: "Lucky",
        marginLeft: 20,
        top: 25
    },

    text_dent2: {

        margin: 40,
        fontSize: 16,
        textAlign: "justify",
        fontFamily: "Poppins"
    },

    container2: {
        flex: 1,
        paddingTop: 22
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },



})