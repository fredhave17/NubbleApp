import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

import {
  AppScreenProps,
  AppTabScreenProps,
} from '../../../routes/navigationType';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button
        title="Home Screen"
        onPress={() => navigation.navigate('SettingScreen')}
      />
    </Screen>
  );
}
