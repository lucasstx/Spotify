import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

const musicas = [
    { id: 1, nome: "Mamonas Assassinas", descricao: "Música" },
    { id: 2, nome: "Bois Don't Cry", descricao: "Música" },
    { id: 3, nome: "Vira-Vira", descricao: "Música" },
    { id: 4, nome: "Pelados em Santos", descricao: "Música" },
];

export default function ViewMusicas() {
    return (
        <View style={style.container}>
            {musicas.map((musica) => (
                <TouchableOpacity key={musica.id} style={style.buttonViewArtista}>
                    <Image style={style.imgRedonda} source={require('../../../imagens/mamonas.png')} />
                    <View style={style.viewTextoArtista}>
                        <Text style={style.textoNomeArtista}>{musica.nome}</Text>
                        <Text style={style.textoArtista}>{musica.descricao}</Text>
                    </View>
                    <Image style={style.seta} source={require('../../../imagens/seta-icon.png')} />
                </TouchableOpacity>
            ))}
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        height: 420,
        display: "flex",
        justifyContent: "space-around",
        paddingBottom: 40,
    },
    textoArtista: {
        color: "#868687",
    },
    textoNomeArtista: {
        fontSize: 18,
        color: "white",
    },
    seta: {
        height: 20,
        width: 15,
    },
    viewTextoArtista: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal: 10,
        width: 270,
    },
    buttonViewArtista: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    imgRedonda: {
        width: 70,
        height: 70,
    }
});
