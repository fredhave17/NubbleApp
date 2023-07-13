import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';

import {AppScreenProps} from '../../../routes/navigationType';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingScreen'>;

export function NewPostScreen(props: AppScreenProps<'NewPostScreen'>) {
  return (
    <Screen canGoBack>
      <Text>New Post Screen</Text>
    </Screen>
  );
}
