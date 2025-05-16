import { StyleSheet } from "react-native";


export const styleLogin = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#060e14'
    },

    form:{

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e4b6e',
        width: 350,
        height: 500,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100
    },

    imagem: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        top: 40
    },

    container_inp:{
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '',
        width: 370,
        height: 400,
        bottom: 30
    },

    text_sobre: {

        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 200,
        top: 25
    },

    text_input: {

        width: 310,
        height: 50,
        marginTop: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        borderTopRightRadius: 250,
    },

    bt_entrar: {

        width: 200,
        height: 40,
        backgroundColor: '#2c72a8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderTopRightRadius: 250,
        top: 60

    },

    text_entrar: {

        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },

    esqueceu:{

        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        top: 9

    },

    text_bt:{

        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        top: 50
    }

})