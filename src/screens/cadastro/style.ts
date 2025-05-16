import { StyleSheet } from "react-native";

export const styleCadastro = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#060e14'
    },

    imagem: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        bottom: 20
      },

    form: {
        
        width: 350,
        height: 550,
        backgroundColor: '#1e4b6e',
        alignItems: "center",
        justifyContent: 'center',
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100
    },

//    text_cadastrar:{
//
//        fontSize: 20,
//        fontWeight: 'bold',
//       color: 'white',
//        bottom: 80
//
//    },

    text_sobre: {

        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 200,
        top: 7
    },

    text_input: {

        width: 310,
        height: 50,
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 50,
        borderTopRightRadius: 250
    },
    
    bt_cadastrar: {

        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        top: 40,
        backgroundColor: '#2c72a8',
        borderRadius: 50,
        borderTopRightRadius: 250

    },

    text_back: {

        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        top: 130

    },

    text_bt:{

        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }

})