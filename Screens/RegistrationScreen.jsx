import React, { useState } from 'react';
import {
  Alert,
  Image,
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
import PlusIcon from '../assets/icons/PlusIcon.svg';
import CloseIcon from '../assets/icons/CloseIcon.svg';

const RegistrationScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form, setForm] = useState({
    login: '',
    email: '',
    password: '',
  });
  const [focusedField, setFocusedField] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    const { login, email, password } = form;

    if (login && email && password) {
      console.log('Submitted with values:', form);
      setForm({
        login: '',
        email: '',
        password: '',
      });
      setFocusedField(null);
      setAvatar(null);
    } else {
      Alert.alert('Будь ласка, заповніть всі поля');
    }
  };

  const toggleAvatar = () => {
    if (avatar) {
      setAvatar(null);
    } else {
      setAvatar(require('../assets/images/dogyAvatar.jpg'));
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
          <View style={styles.avatarContainer}>
            {avatar ? (
              <Image source={avatar} style={styles.avatar} />
            ) : (
              <View style={styles.avatar} />
            )}
            <TouchableOpacity
              onPress={toggleAvatar}
              style={styles.addAvatarButton}
            >
              {avatar ? (
                <CloseIcon width={25} height={25} />
              ) : (
                <PlusIcon width={25} height={25} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Реєстрація</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                focusedField === 'login' && styles.inputFocused,
              ]}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              value={form.login}
              onFocus={() => setFocusedField('login')}
              onBlur={() => setFocusedField(null)}
              onChangeText={(value) => handleChange('login', value)}
            />
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
              text="Зареєстуватися"
              style={{ marginTop: 27 }}
            />
          </View>

          <TouchableOpacity style={styles.loginContainer}>
            <Text style={styles.loginText}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    paddingTop: 92,
    paddingBottom: 45,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: 'absolute',
    top: -60,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  addAvatarButton: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,
    backgroundColor: '#FFF',
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 32,
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
});
