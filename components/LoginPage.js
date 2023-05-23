import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [titleBackgroundColor, setTitleBackgroundColor] = useState('#274584');
    const [bodyBackgroundColor, setBodyBackgroundColor] = useState('#709FDC');
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState('#274584');
    const [errorVisible, setErrorVisible] = useState(false);

    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            // Здесь можно добавить логику для проверки введенных данных и выполнения входа в аккаунт
            if(username!='12'){
                setErrorVisible(true);
            }else if(password!='333'){
                setErrorVisible(true);
            }else{
                navigation.navigate('ProdScanPage');
            }
        
        } catch (error) {
            console.log('Ошибка при выполнении входа', error);
        }
    };
    const handleFieldFocus = () => {
        setErrorVisible(false);
    }
    const loadScene = () => {
        navigation.navigate('RegistratonPage');
    };

    return (
        <View style={[styles.container, { backgroundColor: bodyBackgroundColor }]}>
            <View style ={styles.content}>
            <TextInput
                style={styles.input}
                placeholder="Имя пользователя"
                value={username}
                onFocus={handleFieldFocus}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry
                onFocus={handleFieldFocus}
                value={password}
                onChangeText={setPassword}
            />
            {errorVisible ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Имя пользователя или пароль введены неверно!</Text>
                </View>
            ):(
                <View style={styles.emptySpace} />
            )}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
                onPress={loadScene}
            >
            <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
            onPress={handleLogin}
            >
            <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
},
content:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    width:'100%',
    height:'100%',
},
input: {
    width: '80%',
    height: 45,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    fontSize:17,
    marginBottom: 12,
    paddingHorizontal: 8,
},
emptySpace: {
    marginBottom: 70,
},
errorContainer: {
    width:'80%',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor:'white',
    padding: 8,
    alignItems: 'center',
    marginBottom: 12,
},
errorText: {
    color: 'red',
    marginBottom: 12,
    fontSize:18,
},
button: {
    width: '55%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 4,
},
buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
},
});

export default LoginScreen;
