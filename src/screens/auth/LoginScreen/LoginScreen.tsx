import React from 'react';
import {
  Text,
  FormTextInput,
  FormPasswordInput,
  Screen,
  Button,
} from '@components';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/routes';
import {useForm, Controller} from 'react-hook-form';

import {SingUpSchema, loginSreenSchema} from './loginScreenSchema';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  function navigateForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  const {control, formState, handleSubmit} = useForm<SingUpSchema>({
    resolver: zodResolver(loginSreenSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: SingUpSchema) {}

  return (
    <Screen>
      <View>
        <Text variant="headingLarge" marginBottom="s8">
          Ola
        </Text>
        <Text variant="paragraphLarge" marginBottom="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's20'}}
        />

        <FormPasswordInput
          control={control}
          name={'password'}
          label={'Senha'}
          placeholder={'Digite sua senha'}
          boxProps={{mb: 's48'}}
        />

        <Text
          variant="paragraphSmall"
          bold
          color="primary"
          marginBottom="s40"
          onPress={navigateForgotPasswordScreen}>
          Esqueci minha senha
        </Text>
        <Button
          disabled={!formState.isValid}
          title="Entrar"
          style={{marginBottom: 12}}
          onPress={handleSubmit(submitForm)}
        />
        <Button
          variant="outline"
          title="Criar uma conta"
          onPress={navigateSignUpScreen}
        />
      </View>
    </Screen>
  );
}
