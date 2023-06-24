import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
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

          <Text
            variant="paragraphSmall"
            bold
            color="primary"
            marginBottom="s40">
            Esqueci minha senha
          </Text>
          <Button title="Entrar" style={{marginBottom: 12}} />
          <Button variant="outline" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
