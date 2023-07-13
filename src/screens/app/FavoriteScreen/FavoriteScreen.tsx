import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';

import {AppScreenProps} from '../../../routes/navigationType';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingScreen'>;

export function FavoriteScreen(props: AppScreenProps<'FavoriteScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Favorite Screen</Text>
    </Screen>
  );
}
