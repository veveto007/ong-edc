import { Image, Text, View, TouchableOpacity, TextInput } from "react-native"
import { styleCadastro } from "./style";
import { router } from "expo-router";

const Logo = require('../../../assets/images/logo_2.png')

export const Cadastro = () =>{
    return(
        <View style={styleCadastro.container}>

            <View style={styleCadastro.form}>

                <Image 
                    source={Logo}
                    style={styleCadastro.imagem}
                />

                
                <Text style={styleCadastro.text_sobre}>Usuário</Text>
                <TextInput style={styleCadastro.text_input}
                placeholder="@Digite seu Usuario"
                placeholderTextColor="#999"
                />

                <Text style={styleCadastro.text_sobre}>Email</Text>
                <TextInput style={styleCadastro.text_input}
                placeholder="@Digite seu Email"
                placeholderTextColor="#999"
                />

                <Text style={styleCadastro.text_sobre}>Senha</Text>
                <TextInput style={styleCadastro.text_input}
                placeholder="@Digite sua Senha"
                placeholderTextColor="#999"
                />



                <TouchableOpacity style={styleCadastro.bt_cadastrar}>

                    <Text style={styleCadastro.text_bt}>
                        Criar Conta
                    </Text>

                </TouchableOpacity>


                <Text onPress={() => router.navigate("/stacks/home")} style={styleCadastro.text_back}>
                    Back
                </Text>



            </View>

        </View>
    );
}