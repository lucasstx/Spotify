
import React from "react"; import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView, StatusBar } from "react-native";
;
import { LinearGradient } from 'expo-linear-gradient';
import ViewBoaTarde from "./Componentes/Tela01/viewBoaTarde";
import ViewRecomendados from "./Componentes/Tela01/viewRecomendados";
import ViewSaudades from "./Componentes/Tela01/viewSaudades";
export default function Tela01() {
    return (
        <SafeAreaView style={style.safeArea}>
            <LinearGradient colors={['rgba(34, 34, 34, 1)', 'rgba(23, 23, 23, 1)', 'rgba(23, 20, 20, 1)']} style={style.fundo} />
            <ScrollView showsVerticalScrollIndicator={false} horizontal={false} contentContainerStyle={style.scroll}>
                <ViewBoaTarde/>
                <ViewRecomendados />
                <ViewSaudades/>
            </ScrollView>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: 20,
    },
    fundo: {
        ...StyleSheet.absoluteFillObject,
    },
    scroll: {
        paddingVertical: 20,
    },
});