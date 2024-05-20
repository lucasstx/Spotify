import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function ViewArtista(){
    return(
        <TouchableOpacity style={style.buttonViewArtista}>
            <Image style={style.imgRedonda} source={require('../../../imagens/mamonas.png')}/>
            <View style={style.viewTextoArtista}>
                <Text style={style.textoNomeArtista}>Mamonas Assassinas</Text>
                <Text style={style.textoArtista}>Artista</Text>
            </View>
            <Image style={style.seta} source={require('../../../imagens/seta-icon.png')}/>
        </TouchableOpacity>
    );
}
const style = StyleSheet.create({
    textoArtista:{
        color: "#868687",
    },
    textoNomeArtista:{
        fontSize: 18,
        color: "white",
    },  
    seta:{
        height: 20,
        width: 15,
    },
    viewTextoArtista:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal: 10,
        width: 270,
    },
    buttonViewArtista:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    imgRedonda:{
        borderRadius: 100,
        width: 70,
        height: 70,
    }
});