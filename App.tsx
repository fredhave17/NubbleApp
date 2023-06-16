import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text variant="headingLarge">Test Text</Text>
      <Text variant="headingMedium">Test Text</Text>
      <Text variant="headingSmall">Test Text</Text>
      <Text variant="paragraphLarge">Test Text</Text>
      <Text variant="paragraphMedium">Test Text</Text>
      <Text variant="paragraphSmall">Test Text</Text>
      <Text variant="paragraphCaption">Test Text</Text>
      <Text variant="paragraphCaptionSmall">Test Text</Text>
    </SafeAreaView>
  );
}

export default App;
