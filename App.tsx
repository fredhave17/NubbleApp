import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text variant="headingLarge">Test Text</Text>
      <Text variant="headingMedium">Test Text</Text>
    </SafeAreaView>
  );
}

export default App;
