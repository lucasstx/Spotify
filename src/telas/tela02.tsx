
import React from "react"; import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView, StatusBar } from "react-native";
;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { LinearGradient } from 'expo-linear-gradient';
import ViewTabNavigation from "./Componentes/Tela01/viewTabNavigation";
export default function Tela02() {
    return (
        <SafeAreaView style={style.safeArea}>
            <LinearGradient colors={['rgba(34, 34, 34, 1)', 'rgba(23, 23, 23, 1)', 'rgba(23, 20, 20, 1)']} style={style.fundo} />
            <ScrollView showsVerticalScrollIndicator={false} horizontal={false} contentContainerStyle={style.scroll}>
                
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