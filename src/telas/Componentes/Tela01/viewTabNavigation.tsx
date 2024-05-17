import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const windowWidth = Dimensions.get('screen').width;
import ViewRecomendados from './viewRecomendados';
import ViewSaudades from './viewSaudades';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
const Tab = createBottomTabNavigator();

export default function ViewTabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
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
        }}
        >
            <Tab.Screen name="Início" component={ViewSaudades} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../../../imagens/home.png') : require('../../../imagens/home.png')}
                        style={style.icon}
                    />
                ),
            }}
            />
            <Tab.Screen name="Buscar" component={ViewRecomendados} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../../../imagens/lupa.png') : require('../../../imagens/lupa.png')}
                        style={style.icon}
                    />
                ),
            }}
            />
            <Tab.Screen name="Biblioteca" component={ViewRecomendados} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../../../imagens/library.png') : require('../../../imagens/library.png')}
                        style={style.icon}
                    />
                ),
            }}
            />
            <Tab.Screen name="Premium" component={ViewRecomendados} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../../../imagens/premium.png') : require('../../../imagens/premium.png')}
                        style={style.icon}
                    />
                ),
            }}
            />
        </Tab.Navigator>
    );
}
const style = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});