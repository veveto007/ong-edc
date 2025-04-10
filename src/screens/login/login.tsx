import { Image, Text, View, TextInput, TouchableOpacity } from "react-native"
import { styleLogin } from "./style"
import { router } from "expo-router"


const Logo = require('../../../assets/images/logo_2.png')

export const Login = () => {

   return(
        <View style={styleLogin.container}>
            
            <View style={styleLogin.form}>

                <Image
                source={Logo}
                style={styleLogin.imagem}
                />
                
                <View style={styleLogin.container_inp}>

                        <Text style={styleLogin.text_sobre}>Email</Text>
                        <TextInput style={styleLogin.text_input}
                            placeholder="@Digite seu Email"
                            placeholderTextColor="#999"
                        />
                    
                        <Text style={styleLogin.text_sobre}>Senha</Text>
                        <TextInput style={styleLogin.text_input}
                            placeholder="@Digite sua Senha"
                            placeholderTextColor="#999"
                        />

                        <Text style={styleLogin.esqueceu}>
                            Esqueceu sua Senha?
                        </Text>

                        <TouchableOpacity style={styleLogin.bt_entrar}>
                            <Text style={styleLogin.text_entrar}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    
                </View>

                <Text style={styleLogin.text_bt} onPress={() => router.navigate("/stacks/home")}>
                    Back
                </Text>


            </View>
        
        </View>
   )
}