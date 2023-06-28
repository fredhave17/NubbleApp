import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route}: ScreenProps) {
  const HandlePressGoBack = () => {
    //Todo goBack
  };
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text variant="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text variant="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={HandlePressGoBack} title={''} mt="s40" />
    </Screen>
  );
}
