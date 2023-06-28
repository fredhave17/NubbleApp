import React from 'react';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {View} from 'react-native';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <View style={{paddingHorizontal: 24}}>
        <Text variant="headingLarge" marginBottom="s8">
          Ola
        </Text>
        <Text variant="paragraphLarge" marginBottom="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          label={'E-mail'}
          placeholder="Digite seu e-mail"
          errorMessage="Error mensage"
          boxProps={{marginBottom: 's16'}}
        />

        <TextInput
          label={'Senha'}
          placeholder="Digite sua senha"
          RightComponent={<Icon name="eyeOn" color="gray2" />}
        />

        <Text variant="paragraphSmall" bold color="primary" marginBottom="s40">
          Esqueci minha senha
        </Text>
        <Button title="Entrar" style={{marginBottom: 12}} />
        <Button variant="outline" title="Criar uma conta" />
      </View>
    </Screen>
  );
}
