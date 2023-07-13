import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';

import {AppScreenProps} from '../../../routes/navigationType';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingScreen'>;

export function ProfileScreen(props: AppScreenProps<'ProfileScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Profile Screen</Text>
    </Screen>
  );
}
