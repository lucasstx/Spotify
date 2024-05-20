import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput, Image } from "react-native";

const width = Dimensions.get('screen').width;

export default function HeaderPesquisa() {
    return (
        <View style={styles.container}>
            <View style={styles.viewPesquisaHeader}>
                <View style={styles.viewInputText}>
                    <Image style={styles.imgHeader} source={require('../../../imagens/lupa.png')}/>
                    <TextInput style={styles.inputHeader} placeholderTextColor={"rgba(208, 207, 212, 0.5)"} placeholder="O que você quer ouvir?"/>
                </View>
                <TouchableOpacity>
                    <Text style={styles.textoCancelar}>Cancelar</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                <TouchableOpacity style={[styles.buttonHeaderPesquisa, styles.activeButton]}>
                    <Text style={styles.tituloButtonHeaderPesquisa}>Melhores Resultados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonHeaderPesquisa}>
                    <Text style={styles.tituloButtonHeaderPesquisa}>Artista</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonHeaderPesquisa}>
                    <Text style={styles.tituloButtonHeaderPesquisa}>Músicas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonHeaderPesquisa}>
                    <Text style={styles.tituloButtonHeaderPesquisa}>Playlists</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    textoCancelar:{
        color: "white",
        fontSize: 15,
    },
    imgHeader:{
        width: 20,
        height: 20,
    },
    inputHeader:{
        width: 230,
        fontSize: 15,
        paddingHorizontal: 10,
        color: "white"
    },
    viewInputText:{
        backgroundColor: "rgba(217, 217, 217, 0.1)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    viewPesquisaHeader:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    tituloButtonHeaderPesquisa: {
        color: "white",
        fontSize: 15,
    },
    buttonHeaderPesquisa: {
        borderWidth: 1,
        borderColor: "rgba(75, 75, 75, 1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 20,
    },
    activeButton: {
        borderColor: "#127734",
        backgroundColor: "#127734",
    },
    container: {
        width: width,
        height: 140, // Ajustei a altura para caber os botões e permitir rolagem horizontal
        backgroundColor: "#1A1A1A",
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    scrollViewContent: {
        alignItems: 'center', // Para garantir que os itens sejam alinhados verticalmente ao centro
    },
});
