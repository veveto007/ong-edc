import { Image, Text, View, TextInput, TouchableOpacity, SafeAreaView } from "react-native"
import { styleLogin } from "./style"
import { router } from "expo-router"
import { useState } from "react"

const Logo = require('../../../assets/images/logo_2.png')

export const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


   return(
        <SafeAreaView style={styleLogin.container}>
            
            <View style={styleLogin.form}>

                <Image
                source={Logo}
                style={styleLogin.imagem}
                />
                
                <View style={styleLogin.container_inp}>

                        <Text style={styleLogin.text_sobre}>Email</Text>
                        <TextInput style={styleLogin.text_input}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholder="Digite seu Email"
                            placeholderTextColor="#999"
                        />
                    
                        <Text style={styleLogin.text_sobre}>Senha</Text>
                        <TextInput style={styleLogin.text_input}
                            secureTextEntry
                            value={senha}
                            onChangeText={setSenha}
                            placeholder="Digite sua Senha"
                            placeholderTextColor="#999"
                        />

                        <Text style={styleLogin.esqueceu}>
                            Esqueceu sua Senha?
                        </Text>

                        <TouchableOpacity onPress={() => router.navigate("/stacks/hnave")} style={styleLogin.bt_entrar}>
                            <Text style={styleLogin.text_entrar}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    
                </View>

                <Text style={styleLogin.text_bt} onPress={() => router.navigate("/stacks/home")}>
                    Back
                </Text>


            </View>
        
        </SafeAreaView>
   )
}