import { Image, Text, View, TouchableOpacity } from "react-native"
import { styleHomeSC } from "./style"
import { router } from "expo-router"


const Logo = require('../../../assets/images/logo_1.png')

export const HomeScreen = () => {
    return(
        <View style={styleHomeSC.container}>
            
            <Image 
                source={Logo}
                style={styleHomeSC.imagem}
            />
            <Text style={styleHomeSC.text_int}>
                Venha conhecer e fazer parte desta missão!
            </Text>

            <TouchableOpacity style={styleHomeSC.buttonH} onPress={() => router.navigate("/stacks/login")}>
                <Text style={styleHomeSC.textoH}>
                    Login
                </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styleHomeSC.buttonH} onPress={() => router.navigate('/stacks/cadastro')}>
                <Text style={styleHomeSC.textoH}>
                    Cadastre-se
                </Text>
            </TouchableOpacity>

        </View>
    )
}


//#102230