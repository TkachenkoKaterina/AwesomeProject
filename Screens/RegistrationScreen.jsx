import React, { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { ButtonCustom } from "../components/ButtonCustom";

export const RegistrationScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (login && email && password) {
            console.log("Submitted with values:", {
                login,
                email,
                password,
            });
            setLogin('');
            setEmail('');
            setPassword('');
        } else {
            Alert.alert("Помилка", "Будь ласка, заповніть всі поля");
        }
    };

    return (
            <View>
                <Text style={styles.title}>
                    Реєстрація
                </Text>
            
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Логін'
                    placeholderTextColor='#BDBDBD'
                    value={login}
                    onChangeText={setLogin}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Адреса електронної пошти'
                    placeholderTextColor='#BDBDBD'
                    value={email}
                    onChangeText={setEmail}
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={[styles.input, styles.passwordInput]}
                            placeholder='Пароль'
                            placeholderTextColor='#BDBDBD'
                        secureTextEntry={!passwordVisible}
                        value={password}
                    onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setPasswordVisible(!passwordVisible)}
                            style={styles.showButton}
                        >
                            <Text style={styles.showButtonText}>
                                {passwordVisible ? "Сховати" : "Показати"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <ButtonCustom onPress={handleSubmit} text="Зареєстуватися" style={ {marginTop: 43}} />
                </View>
            
                <TouchableOpacity style={styles.loginContainer}>
                    <Text style={styles.loginText}>Вже є аккаунт? Увійти</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#212121',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 'normal',
        letterSpacing: 0.3,
    },
    inputContainer: {
        marginTop: 32,
        gap: 16,
    },
    input: {
        width: 343,
        height: 50,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        padding: 16,
        borderRadius: 8,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 'normal',
    },
    passwordContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
    },
    showButton: {
        position: 'absolute',
        right: 16,
    },
    showButtonText: {
        color: '#1B4371',
        textAlign: 'right',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    },
    loginContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    loginText: {
        color:'#1B4371',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    },
});