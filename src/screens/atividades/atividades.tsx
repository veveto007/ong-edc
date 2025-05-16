import { View, Text, ScrollView, SafeAreaView } from "react-native"
import { styleAtividade } from "./styles"


export const Atividade = () => {
    return(
                <ScrollView>
                    <SafeAreaView style={styleAtividade.container}>

                        <Text style={styleAtividade.text_tit}>
                            Oque Oferecemos
                        </Text>

                        <View style={styleAtividade.cardpai}>

                            <View style={styleAtividade.cardinfo}>
                                <Text style={styleAtividade.text_atv}>
                                    Eventos
                                </Text>

                                <Text style={styleAtividade.text_dent}>
                                    Oferecemos eventos gratuitos que irão trazer a diversão tanto para estudantes quanto para o corpo voluntário. É um grande momento de integração e são realizados em vários momentos ao longo do ano como a festa junina, evento da comunidade e muito mais!
                                </Text>
                            </View>

                            <View style={styleAtividade.cardinfo}>
                                <Text style={styleAtividade.text_atv}>
                                    Atividades complementares
                                </Text>

                                <Text style={styleAtividade.text_dent}>
                                    Desenvolvemos atividades que vão além do horário, como plantões de matemática básica, feiras de profissões e simulados. Essas atividades complementam o desenvolvimento dos nossos estudantes.
                                </Text>
                            </View>

                            <View style={styleAtividade.cardinfo}>
                                <Text style={styleAtividade.text_atv}>
                                    Desenvolvimento Sociocultural
                                </Text>

                                <Text style={styleAtividade.text_dent}>
                                    Atividades que tem como objetivo o desenvolvimento integral de nossos estudantes  dadas em ciclos temáticos. Trabalhamos temas relevantes para os estudantes por meio de debates, levantamento de dados e escrita de redações.
                                </Text>
                            </View>

                        </View>

                    </SafeAreaView>
                </ScrollView>
    )
}