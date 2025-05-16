import {
    Text, 
    View,  
    ScrollView, 
    SafeAreaView, 
    FlatList 
        } 
from "react-native"
import { styleInfo } from "./styles"



export const InfosScreen = () => {
    return(

        <ScrollView>
            <SafeAreaView style={styleInfo.container}>
                    <View style={styleInfo.cardpai}>
                        
                        <Text style={styleInfo.text_tit}>
                            história da matmov
                        </Text>

                        <View style={styleInfo.cardinfo}>
                            <Text style={styleInfo.text_dent}>
                                Em meados de 2011, estudantes da Escola Politécnica da USP, refletiam sobre a dificuldade de entrar na faculdade nos dias de hoje. Conscientes das deficiências do Ensino Público brasileiro, eles idealizaram uma maneira de compartilhar sua experiência e seu conhecimento e mostrar a esses jovens que todos são capazes de mudar o mundo. Para isso, formaram um grupo de sete amigos, movidos por um ideal comum: a realização de sonhos!

                            </Text>
                        </View>
                        
                        <View style={styleInfo.cardinfo}>
                            <Text style={styleInfo.text_dent}>
                                Assim nasceu a Matemática em Movimento, uma ONG que oferece aulas de matemática e de desenvolvimento sociocultural aos sábados para estudantes do Ensino  Público, atuando como parceira das escolas. Nossas atividades vão muito além da matemática: trabalhamos o raciocínio, propomos debates, fazemos passeios, investimos em talentos, incentivamos sonhos e muito mais.
                            </Text>
                        </View>

                        <View style={styleInfo.cardinfo}>
                            <Text style={styleInfo.text_dent}>
                                Com doze anos de existência, a Matemática em Movimento foi de sete para mais de 150 pessoas voluntárias, ajudou mais de 1500 estudantes ao longo de suas trajetórias e realizou passeios culturais e recreativos. Deixamos uma marca em suas jornadas e de suas famílias, plantando a semente da importância de se buscar pela educação. Hoje, oferecemos tanto atividades presenciais quanto virtuais, podendo impactar todo o Brasil.
                            </Text>
                        </View>

                        <View style={styleInfo.cardinfo}>

                            <Text style={styleInfo.text_tit2}>
                                Missão
                            </Text>
                            <Text style={styleInfo.text_dent2}>
                                Orientar jovens do Ensino Público a investir na educação como forma de desenvolvimento pessoal e profissional.
                            </Text>
                        </View>

                        <View style={styleInfo.cardinfo}>

                            <Text style={styleInfo.text_tit2}>
                                Visão
                            </Text>
                            <Text style={styleInfo.text_dent2}>
                                Ser uma organização social reconhecida pelo foco na educação e no desenvolvimento de seu corpo estudantil, por incentivá-lo a seguir seus sonhos e aspirações profissionais.
                            </Text>
                        </View>

                        <View style={styleInfo.cardinfo}>

                            <Text style={styleInfo.text_tit2}>
                                Valores
                            </Text>
                            <Text style={styleInfo.text_dent2}>
                                <FlatList
                                    scrollEnabled={false}
                                    data={[

                                        {key: ' • Foco no Corpo Estudantil'},
                                        {key: ' • Comprometimento'},
                                        {key: ' • Inconformismo'},
                                        {key: ' • Senso de Dono'},
                                        {key: ' • Fazer a diferença'},
                                    ]}
                                    renderItem={({item}) => <Text style={styleInfo.item}>{item.key}</Text>}
                                />
                            </Text>
                        </View>
                    </View>  
            </SafeAreaView>
        </ScrollView>
    )

}