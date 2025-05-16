import { ScrollView, Text, View, Image, TouchableOpacity, SafeAreaView } from "react-native"
import { StyleHnave } from "./style"
import { router } from "expo-router"

const Mat = require('../../../assets/images/mat.png')

export const H_Nave = () => {
        return(

            <ScrollView>
                <SafeAreaView style={StyleHnave.container}>

                        <View style={StyleHnave.header}>
                            <Text style={StyleHnave.text_header}>
                                Ola, Ewerton
                            </Text>
                        </View>


                        <View style={StyleHnave.cardpai}>

                            <View style={StyleHnave.cardinfomat}>

                                <Text style={StyleHnave.text_sab}>
                                    matmov
                                </Text>

                                <Image 
                                    source={Mat}
                                    style={StyleHnave.imagem}

                                />

                            </View>

                            <TouchableOpacity onPress={() => router.navigate('/stacks/infos')} style={StyleHnave.bt_entrar}> 
                                    <Text style={StyleHnave.text_entrar}>
                                        Saiba Mais!
                                    </Text>
                            </TouchableOpacity>

                            <View style={StyleHnave.cardinfo}>

                                <Text>
                                    
                                </Text>

                            </View>

                            <View style={StyleHnave.cardinfo}>

                                <Text>

                                </Text>

                            </View>

                            <View style={StyleHnave.cardinfo}>

                                <Text>

                                </Text>

                            </View>

                    
                        </View>
                    
                </SafeAreaView>
            </ScrollView>
        )
}