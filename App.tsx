import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text variant="headingLarge">Test Text</Text>

          <Icon color="backgroundContrast" name={'heartFill'} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
