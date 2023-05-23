import React from 'react';
import LoginPage from './components/LoginPage';
import RegistratonPage from './components/RegistratonPage';
import ProdScanPage from './components/BarcodeScannerScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from'@react-navigation/native';


const Stack = createStackNavigator();

const Navigate = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name = "LoginPage"
                component={LoginPage}
                options={{
                    title:'Страница входа',
                    headerStyle:{
                        backgroundColor: '#274584',
                    },
                    headerTitleAlign:'center',
                    headerTintColor: 'white',
                    headerTintStyle:{
                        fontWeight: 'bold',
                    },
            }}
                />
            <Stack.Screen
                name = "RegistratonPage"
                component={RegistratonPage}
                options={{
                    title:'Регистрация нового пользователя',
                    headerStyle:{
                        backgroundColor: '#274584',
                    },
                    headerTintColor: 'white',
                    headerTitleAlign:'center',
                    headerTintStyle:{
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                    name="ProdScanPage"
                    component={ProdScanPage}
                    options={{
                        title: 'Страница сканирования продукта',
                        headerStyle: {
                            backgroundColor: '#274584',
                        },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerTintStyle: {
                            fontWeight: 'bold',
                        },
                        headerLeft: null, // Убираем кнопку "Вернуться"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigate;