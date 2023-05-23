import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';

const RegisterScreen = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [email, setEmail] = useState('');
const [buttonBackgroundColor, setButtonBackgroundColor] = useState('#274584');
const [bodyBackgroundColor, setBodyBackgroundColor] = useState('#709FDC');
const [errorPasswordVisible, setErrorPasswordVisible] = useState(false);
const [errorUsernameVisible, setErrorUsernameVisible] = useState(false);
const [errorType, setErrorType] = useState('');

const handleRegister = () => {
    // Здесь можно добавить логику для регистрации нового пользователя
    if(username==''){
        setErrorUsernameVisible(true);
        setErrorType('EmptyUsername');  
    }
    else if(username!='12'){
        setErrorUsernameVisible(true);
        setErrorType('username');
        console.log("Имя пользователя занято!");
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }
    else if (password==''){
        setErrorType('EmptyPassword');
    }
    else if (password!==confirmPassword) {
        setErrorType('password');
        setErrorPasswordVisible(true);
        setPassword('');
        setConfirmPassword('');
        console.log("Пароли не свопадают!");
        // Действия после успешного входа
        }
    else{
            console.log('Регистрация пользователя {',username,'} выполнена');
    }
};
const handlePasswordFocus = () => {
    setErrorPasswordVisible(false);
    setErrorType('');
};
return (
    <View style={[styles.container, {backgroundColor:bodyBackgroundColor}] }>
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                placeholder="Имя пользователя"
                value={username}
                onFocus={handlePasswordFocus}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry
                value={password}
                onFocus={handlePasswordFocus}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Подтвердите пароль"
                secureTextEntry
                value={confirmPassword}
                onFocus={handlePasswordFocus}
                onChangeText={setConfirmPassword}
            />
            {/* {errorUsernameVisible ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Имя пользователя уже занято!</Text>
                </View>
            ) : (
                <View style={styles.emptySpace} />
            )}
            {errorPasswordVisible ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Пароли не совпадают!</Text>
                </View>
            ) : (
                <View style={styles.emptySpace} />
            )} */}
            {errorType === 'EmptyUsername' && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Заполните поле "Имя пользователя"!</Text>
                </View>
            )}
            {errorType === 'username' && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Имя пользователя уже занято!</Text>
                </View>
            )}
            {errorType === 'EmptyPassword' && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Заполните поле "Пароль"!</Text>
                </View>
            )}
            {errorType === 'password' && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Пароли не совпадают!</Text>
                </View>
            )}
            {!errorType && <View style={styles.emptySpace} />}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>Зарегистрироваться</Text>
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
    backgroundColor:'white',
    borderColor: 'black',
    fontSize:18,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
},
emptySpace: {
    marginBottom: 65,
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
    fontSize:20,
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

export default RegisterScreen;