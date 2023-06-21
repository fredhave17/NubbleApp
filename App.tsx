import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text variant="headingLarge">Test Text</Text>

          <Button title={'Entrar'} marginBottom="s12" />
          <Button
            title={'Entrar'}
            marginBottom="s12"
            variant="outline"
            disabled
          />
          <Button title={'Entrar'} loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
