import { Image, Text, View, TouchableOpacity, TextInput, Alert, SafeAreaView } from "react-native"
import { styleCadastro } from "./style";
import { router } from "expo-router";
import { useState } from "react";

const Logo = require('../../../assets/images/logo_2.png')

export const Cadastro = () =>{

    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = () => {
        if (!usuario || !email || !senha) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        console.log("Usuário cadastrado:", { usuario, email, senha });
        Alert.alert("Sucesso", "Conta criada com sucesso!");

        router.navigate("/stacks/home");
    };

    return(
        <SafeAreaView style={styleCadastro.container}>

            <View style={styleCadastro.form}>

                <Image 
                    source={Logo}
                    style={styleCadastro.imagem}
                />

                
                <Text style={styleCadastro.text_sobre}>Usuário</Text>
                <TextInput style={styleCadastro.text_input}
                value={usuario}
                onChangeText={setUsuario}
                placeholder="@Digite seu Usuario"
                placeholderTextColor="#999"
                />

                <Text style={styleCadastro.text_sobre}>Email</Text>
                <TextInput style={styleCadastro.text_input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                placeholder="@Digite seu Email"
                placeholderTextColor="#999"
                />

                <Text style={styleCadastro.text_sobre}>Senha</Text>
                <TextInput style={styleCadastro.text_input}
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
                placeholder="@Digite sua Senha"
                placeholderTextColor="#999"
                />



                <TouchableOpacity style={styleCadastro.bt_cadastrar} onPress={handleCadastro}>

                    <Text style={styleCadastro.text_bt}>
                        Criar Conta
                    </Text>

                </TouchableOpacity>


                <Text onPress={() => router.navigate("/stacks/home")} style={styleCadastro.text_back}>
                    Back
                </Text>



            </View>

        </SafeAreaView>
    );
}