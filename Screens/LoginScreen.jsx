import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ButtonCustom } from '../components/ButtonCustom';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    const { email, password } = form;

    if (email && password) {
      console.log('Submitted with values:', form);
      setForm({
        email: '',
        password: '',
      });
      setFocusedField(null);
      navigation.navigate('BottomTabNavigator');
    } else {
      Alert.alert('Будь ласка, заповніть всі поля');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require('../assets/images/photo_bg.png')}
        style={styles.background}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <Text style={styles.title}>Увійти</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                focusedField === 'email' && styles.inputFocused,
              ]}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              value={form.email}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              onChangeText={(value) => handleChange('email', value)}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={[
                  styles.input,
                  styles.passwordInput,
                  focusedField === 'password' && styles.inputFocused,
                ]}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={!passwordVisible}
                value={form.password}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                onChangeText={(value) => handleChange('password', value)}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.showButton}
              >
                <Text style={styles.showButtonText}>
                  {passwordVisible ? 'Сховати' : 'Показати'}
                </Text>
              </TouchableOpacity>
            </View>

            <ButtonCustom
              onPress={handleSubmit}
              text="Увійти"
              style={{ marginTop: 27 }}
            />
          </View>

          <TouchableOpacity
            style={styles.loginContainer}
            onPress={() => navigation.navigate('RegistrationScreen')}
          >
            <Text style={styles.loginText}>
              Немає акаунту?
              <Text style={styles.registerText}> Зареєструватися</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    height: 489,
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: 0.01,
  },
  inputContainer: {
    width: '100%',
    marginTop: 33,
    gap: 16,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 16,
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 'normal',
  },
  inputFocused: {
    backgroundColor: '#FFF',
    borderColor: '#FF6C00',
    borderWidth: 1,
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
    fontFamily: 'Roboto-Regular',
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
    color: '#1B4371',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  registerText: {
    textDecorationLine: 'underline',
  },
});
