import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function ViewBoaTarde() {
    return (
        <View style={style.viewBoatarde}>
            <View style={style.viewButtonConfig}>
                <Text style={style.tituloBoatarde}>Boa Tarde</Text>
                <View style={style.viewButtons}>
                    <TouchableOpacity><Image source={require('../../../imagens/notificacao-icon.png')} /></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../../../imagens/relogio-icon.png')} /></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../../../imagens/Settings0icon.png')} /></TouchableOpacity>
                </View>
            </View>
            <View style={style.viewPlaylistContainer}>
                <View style={style.viewPlaylist}>
                    <TouchableOpacity style={style.buttonPlaylist}>
                        <Image style={style.imgBoaTarde} source={require('../../../imagens/terapia-img.png')} />
                        <Text style={style.tituloPlaylist}>Terapia</Text>
                    </TouchableOpacity>
                    <View style={style.spacer} />
                    <TouchableOpacity style={style.buttonPlaylist}>
                        <Image style={style.imgBoaTarde} source={require('../../../imagens/atabagrime.png')} />
                        <Text style={style.tituloPlaylist}>AtabaGrime</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.viewPlaylist}>
                    <TouchableOpacity style={style.buttonPlaylist}>
                        <Image style={style.imgBoaTarde} source={require('../../../imagens/filhodanoite.png')} />
                        <Text style={style.tituloPlaylist}>Filho da{'\n'}noite</Text>
                    </TouchableOpacity>
                    <View style={style.spacer} />
                    <TouchableOpacity style={style.buttonPlaylist}>
                        <Image style={style.imgBoaTarde} source={require('../../../imagens/utopia.png')} />
                        <Text style={style.tituloPlaylist}>UTOPIA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    viewBoatarde: {
        width: "100%",
        paddingVertical: 20,
    },
    viewButtonConfig: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    viewButtons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 120,
    },
    tituloBoatarde: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    viewPlaylistContainer: {
    },
    viewPlaylist: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        height: 70,
    },
    buttonPlaylist: {
        flexDirection: "row",
        width: "49%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "rgba(46, 46, 46, 1)",
        borderRadius: 5,
    },
    tituloPlaylist: {
        color: "white",
        width: 100,
        fontWeight: "500",
        fontSize: 15,
        textAlign: "center",
    },
    imgBoaTarde: {
        width: 70,
        height: 70,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    spacer: {
        width: "2%",
    },
});
