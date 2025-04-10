import { StyleSheet } from "react-native";

export const styleHomeSC = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e4b6e'
    },

    imagem: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 80,
        borderColor: "#00bfff",
        borderWidth: 2,
        bottom: 40
      },

    textoH: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },

    buttonH: {
        width: 290,
        height:60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 150,
//        borderBottomRightRadius: 650,
        borderTopLeftRadius: 650,
        borderColor: "#00bfff",
        borderWidth: 0.5,
        margin: 10,
        top: 140
    }

});