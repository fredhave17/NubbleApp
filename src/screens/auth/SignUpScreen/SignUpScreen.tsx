import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {Controller, useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {signUpSchema, SingUpSchema} from './signUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormPasswordInput} from '../../../components/Form/FormTextPasswordInput';
import {AuthScreenProps} from '../../../routes/navigationType';

export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SingUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      username: '',
    },
    mode: 'onChange',
  });
  function navigateSubmitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  function submitForm({email, fullName, password, username}: SingUpSchema) {}

  return (
    <Screen canGoBack scrollable>
      <Text variant="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name={'username'}
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label={'Nome completo'}
        placeholder={'Digite seu nome completo'}
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label={'E-mail'}
        placeholder={'Digite seu e-mail'}
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name={'password'}
        label={'Senha'}
        placeholder={'Digite sua senha'}
        boxProps={{mb: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        title={'Criar minha conta'}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
