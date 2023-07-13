import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';

import {AppScreenProps} from '../../../routes/navigationType';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingScreen'>;

export function SettingScreen(props: AppScreenProps<'HomeScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Setting screen</Text>
    </Screen>
  );
}
