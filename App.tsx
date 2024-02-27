/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingMedium" italic bold>
          Coffstack
        </Text>
        <Button title="Entrar" margin="s12" preset="primary" />
        <Button title="Entrar" margin="s12" preset="outline" />
        <Button title="Entrar" margin="s12" loading />
        <Button title="Entrar" margin="s12" disabled />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
