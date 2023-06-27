import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';

export function SignUpScreen() {
  return (
    <Screen canGoBack scrollable>
      <Text variant="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput
        label={'Seu username'}
        placeholder={'@'}
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label={'Nome completo'}
        placeholder={'Digite seu nome completo'}
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label={'E-mail'}
        placeholder={'Digite seu e-mail'}
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label={'Senha'}
        placeholder={'Digite sua senha'}
        RightComponent={<Icon name="eyeOn" color="gray2" />}
        boxProps={{mb: 's48'}}
      />

      <Button title={'Criar minha conta'} />
    </Screen>
  );
}
