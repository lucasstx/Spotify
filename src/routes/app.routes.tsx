import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
const { Navigator, Screen } = createBottomTabNavigator();
import Tela01 from "../telas/tela01";
import Tela02 from "../telas/tela02";
export function AppRoutes() {
    return (
        <Navigator initialRouteName="Início" screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
                position: 'absolute',
                backgroundColor: "rgba(23, 20, 20, 1)",
                borderTopWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
                paddingBottom: 10,
            },
            tabBarActiveTintColor: "white",
        }}>
            <Screen name="Início" component={Tela01}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require('../imagens/home.png') : require('../imagens/home.png')} style={style.icon} />
                    )
                }}
            />
            <Screen name="Buscar" component={Tela02}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require('../imagens/lupa.png') : require('../imagens/lupa.png')} style={style.icon} />
                    )
                }}
            />
        </Navigator>
    );
}
const style = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    }
});