import React from 'react';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {View} from 'react-native';
import {Icon} from '../../../components/Icon/Icon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Screen} from '../../../components/Screen/Screen';
import {RootStackParamList} from '../../../routes/routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  return (
    <Screen>
      <View>
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
        <Button
          variant="outline"
          title="Criar uma conta"
          onPress={navigateSignUpScreen}
        />
      </View>
    </Screen>
  );
}
