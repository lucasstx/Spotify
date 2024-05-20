import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function ViewScrollAlbuns(){
    return(
        <View style={{paddingHorizontal: 10, marginTop: 20, marginBottom: 20}}>
            <Text style={style.titulo}>Inclui Mamonas Assassinas</Text>
            <View style={style.viewAlbuns}>
                <TouchableOpacity>
                    <Image source={require('../../../imagens/thisis.png')}/>
                    <Text style={style.textoNomeMusica}>This is Mamonas{'\n'}Assassinas</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../imagens/radiomamonas.png')}/>
                    <Text style={style.textoNomeMusica}>Rádio de{'\n'}Mamonas Assa...</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../imagens/anos90.png')}/>
                    <Text style={style.textoNomeMusica}>Brasil Anos 90</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    viewAlbuns:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",

    },
    textoNomeMusica:{
        color: "#ABA8B3",
        marginTop: 5,
    }, 
    titulo:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
        marginLeft: 10,
    }
});0