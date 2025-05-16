import { StyleSheet } from "react-native";


export const StyleHnave = StyleSheet.create({

    container: {

        flex: 1,
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e4b6e'

    },

    header: {
        
        flex: 1,
        width: 390,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20

    },

    text_header:{

        width: 200,
        height: 30,
        right: 80,
        top: 50,
        // backgroundColor: 'black',
        fontSize: 20,
        color: "#1b72cf",
        textTransform: "uppercase",
        fontFamily: "Lucky",

    },

    cardpai: {
        
        flex: 1,
        width: 'auto',
        height: 'auto',
        minHeight: 1200,
        alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: 'orange',
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        borderRadius: 12,
        marginBottom: 70,
        // top: 30
    },

    cardinfo: {

        width: 350,
        height: 'auto',
        minHeight: 180,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderTopRightRadius: 70,
        borderBottomRightRadius: 70
    },

    cardinfomat: {

        width: 350,
        height: 200,
        // minHeight: 180,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderTopRightRadius: 70,
        borderBottomRightRadius: 70,
        // right: 10
    },

    cardinfoatv: {

        width: 350,
        height: 65,
        // minHeight: 180,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderTopRightRadius: 70,
        borderBottomRightRadius: 70,
        // right: 10
    },

    cardinfojor: {

        width: 350,
        height: 65,
        // minHeight: 180,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderTopRightRadius: 70,
        borderBottomRightRadius: 70,
        // right: 10
    },

    card_circ1: {

        flexDirection: 'row',
        width: 350,
        height: 90,
        // backgroundColor: 'black',
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },

    circ1: {

        width: 60,
        height: 60,
        borderRadius: 50,
        margin: 15,
        backgroundColor: 'white'
    },

    text_circ1: {

        width: 120,
        height: 50,
        fontFamily: 'Poppins',
        color: 'white',
        top: 30,
        right: 8,
        fontSize: 12,
        // backgroundColor: 'black'

    },

    imagem: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 80,
        // borderWidth: 2,
        bottom: 50,
        right: 20
    },

    imagem_seta: {
        width: 20,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 80,
        // borderWidth: 2,
        bottom: 45,
        left: 310
    },

    imagem_areas: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        borderRadius: 80,
        // bottom: 45,
        left: 13,
        top: 12
    },

    bt_entrar: {

        width: 130,
        height: 40,
        backgroundColor: '#2c72a8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderTopRightRadius: 250,
        borderBottomLeftRadius: 250,
        // left: 10,
        bottom: 20
    },

    text_entrar: {

        fontSize: 15,
        // fontWeight: '300',
        fontFamily: 'Lucky',
        color: 'white',
    },

    text_sab:{

        width: 60,
        height: 50,
        left: 260,
        top: 70,
        // backgroundColor: 'black',
        fontSize: 25,
        color: "#1b72cf",
        textTransform: "uppercase",
        fontFamily: "Lucky",
    },

    text_atv:{

        width: 200,
        height: 30,
        left: 10,
        // bottom: 14,
        // backgroundColor: 'black',
        fontSize: 20,
        color: "#1b72cf",
        textTransform: "uppercase",
        fontFamily: "Lucky",
    },

    text_atv_b: {

        width: 200,
        height: 20,
        left: 30,
        fontFamily: 'Poppins',
        fontSize: 14,
        // backgroundColor: 'black'

    }


})