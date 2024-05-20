import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import HeaderPesquisa from "./Componentes/Tela02/headerPesquisa";
import ViewMusicas from "./Componentes/Tela03/viewMusicas";

export default function TelaBuscar() {
    return (
        <SafeAreaView style={style.safeArea}>
            <LinearGradient colors={['rgba(34, 34, 34, 1)', 'rgba(23, 23, 23, 1)', 'rgba(23, 20, 20, 1)']} style={style.fundo} />
            <HeaderPesquisa />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={style.scroll}>
                <ViewMusicas/>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    fundo: {
        ...StyleSheet.absoluteFillObject,
    },
    scroll: {
        paddingVertical: 20,
        backgroundColor: "#121212",
        flexGrow: 1,
    },
});
