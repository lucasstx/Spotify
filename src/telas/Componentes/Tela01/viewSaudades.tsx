import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";

export default function ViewSaudades() {
    return (
        <View style={style.viewRecomendados}>
            <Text style={style.titulo}>Suas músicas estão com saudades</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={style.scroll}>
                <TouchableOpacity style={style.buttonRecomendados}>
                    <Image style={style.imgRecomendados} source={require("../../../imagens/l7.png")} />
                    <View style={style.viewTitulos}>
                        <Text style={style.tituloNomeMusica}>Irrastreável</Text>
                        <Text style={style.tituloArtista}>L7nnon</Text>
                    </View>
                </TouchableOpacity>
                <View style={style.margem} />
                <TouchableOpacity style={style.buttonRecomendados}>
                    <Image style={style.imgRecomendados} source={require("../../../imagens/mamonas.png")} />
                    <View style={style.viewTitulos}>
                        <Text style={style.tituloNomeMusica}>Mamonas Assasinas</Text>
                        <Text style={style.tituloArtista}>Mamonas Assasinas</Text>
                    </View>
                </TouchableOpacity>
                <View style={style.margem} />
                <TouchableOpacity style={style.buttonRecomendados}>
                    <Image style={style.imgRecomendados} source={require("../../../imagens/teto.png")} />
                    <View style={style.viewTitulos}>
                        <Text style={style.tituloNomeMusica}>Prévias.zip</Text>
                        <Text style={style.tituloArtista}>Teto</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    viewRecomendados: {
        width: "100%",
        height: 350,
        paddingVertical: 20,
    },
    titulo: {
        marginBottom: 35,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    scroll: {
        paddingHorizontal: 5,
    },
    buttonRecomendados: {
        flexDirection: "column",
        alignItems: "center",

        width: 150,
        height: 220,
    },
    imgRecomendados: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    viewTitulos: {
        
    },
    tituloNomeMusica: {
        fontSize: 15,
        width: 150,
        fontWeight: "bold",
        color: "white",
    },
    tituloArtista: {
        fontSize: 14,
        color: "gray",
    },
    margem: {
        width: 10,
    },
});
