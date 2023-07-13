import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {FormPasswordInput} from '../../../components/Form/FormTextPasswordInput';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  ForgotPasswordScreenSchema,
  forgotPasswordScreenSchema,
} from './forgotPasswordScreenSchema';
import {AuthScreenProps} from '../../../routes/navigationType';

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} =
    useForm<ForgotPasswordScreenSchema>({
      resolver: zodResolver(forgotPasswordScreenSchema),
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });
  function onSubimit({email}: ForgotPasswordScreenSchema) {
    reset({
      title: `Enviamos as instruções${'\n'}para seu e-mail`,
      description: `Clique no link enviado no seue-mail para recuperar sua senha`,
      icon: {
        name: 'messageRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text variant="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text variant="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormPasswordInput
        control={control}
        name={'email'}
        label={'E-mail'}
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button
        disabled={!formState.isValid}
        title={'Recuperar senha'}
        onPress={handleSubmit(onSubimit)}
      />
    </Screen>
  );
}
