import { ScrollView, Text, View, Image, TouchableOpacity, SafeAreaView } from "react-native"
import { StyleHnave } from "./style"
import { router } from "expo-router"

const Mat = require('../../../assets/images/mat.png')
const Seta = require('../../../assets/images/seta-direita.png')
const Areas = require('../../../assets/images/cardapio.png')

export const H_Nave = () => {
        return(

            <ScrollView>
                <SafeAreaView style={StyleHnave.container}>

                        <View style={StyleHnave.header}>
                            <Text style={StyleHnave.text_header}>
                                Olá, Ewerton
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
                                        Saíba Mais!
                                    </Text>
                            </TouchableOpacity>

                            <View style={StyleHnave.cardinfoatv}>

                                <Text style={StyleHnave.text_atv}>
                                    atividades
                                </Text>

                                <Text style={StyleHnave.text_atv_b}>
                                    Oque oferecemos!
                                </Text>

                                <TouchableOpacity>
                                        <Image
                                            source={Seta}
                                            style={StyleHnave.imagem_seta}
                                        />
                                </TouchableOpacity>


                            </View>

                            <View style={StyleHnave.cardinfojor}>

                                <Text style={StyleHnave.text_atv}>
                                    Novidades
                                </Text>

                            </View>

                            <View style={StyleHnave.card_circ1}>
                    
                                <View style={StyleHnave.circ1}>
                                        <TouchableOpacity>
                                            <Image
                                                source={Areas}
                                                style={StyleHnave.imagem_areas}
                                            />
                                        </TouchableOpacity>
                                    <Text style={StyleHnave.text_circ1}>
                                        Nossas Áreas
                                    </Text>
                                </View>

                                <Text>
                                
                                </Text>

                                <View style={StyleHnave.circ1}>

                                </View>

                                <View style={StyleHnave.circ1}>

                                </View>

                                <View style={StyleHnave.circ1}>

                                </View>

                            </View>

                        </View>
                    
                </SafeAreaView>
            </ScrollView>
        )
}