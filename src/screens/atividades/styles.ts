import { StyleSheet } from "react-native"


export const styleAtividade = StyleSheet.create({
    
    container: {
        flex: 1,
        minHeight: 1100,
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e4b6e'
    },
    
    text_tit: {

        fontSize: 22,
        color: 'white',
        textTransform: "uppercase",
        fontFamily: "Lucky",
        bottom: 10
    },

    cardpai: {
        
        width: 350,
        height: 'auto',
        minHeight: 600,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'orange',
        // borderBottomLeftRadius: 100,
        // borderTopRightRadius: 100,
        borderRadius: 12,
        top: 30
    },

    cardinfo: {

        width: 350,
        height: 'auto',
        minHeight: 180,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10
    
    },

    text_atv:{

        width: 320,
        height: 30,
        left: 10,
        top: 20,
        // bottom: 14,
        // backgroundColor: 'black',
        fontSize: 20,
        color: "#1b72cf",
        textTransform: "uppercase",
        fontFamily: "Lucky",
        textAlign: 'center'
    },

    text_dent: {

        margin: 35,
        fontSize: 16,
        textAlign: "justify",
        fontFamily: "Poppins",
    },

})