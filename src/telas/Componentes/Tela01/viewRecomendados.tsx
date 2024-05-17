import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";

export default function ViewRecomendados() {
    return (
        <View style={style.viewRecomendados}>
            <Text style={style.titulo}>Recomendado para hoje</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={style.scroll}>
                <TouchableOpacity style={style.buttonRecomendados}>
                    <Image style={style.imgRecomendados} source={require("../../../imagens/predios.png")} />
                    <View style={style.viewTitulos}>
                        <Text style={style.tituloNomeMusica}>Dos Prédios (Deluxe)</Text>
                        <Text style={style.tituloArtista}>Veigh, Supernova Ent</Text>
                    </View>
                </TouchableOpacity>
                <View style={style.margem} />
                <TouchableOpacity style={style.buttonRecomendados}>
                    <Image style={style.imgRecomendados} source={require("../../../imagens/mil.png")} />
                    <View style={style.viewTitulos}>
                        <Text style={style.tituloNomeMusica}>Problemas de um mil</Text>
                        <Text style={style.tituloArtista}>WIU, Teto</Text>
                    </View>
                </TouchableOpacity>
                <View style={style.margem} />
                <TouchableOpacity style={style.buttonRecomendados}>
                    <Image style={style.imgRecomendados} source={require("../../../imagens/oruan.png")} />
                    <View style={style.viewTitulos}>
                        <Text style={style.tituloNomeMusica}>Shittrap 10</Text>
                        <Text style={style.tituloArtista}>Veigh, Supernova Ent</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    viewRecomendados: {
        width: "100%",
        height: 320,
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
