import React from 'react';
import {Text} from '../../../components/Text/Text';
import {ActivityIndicator} from 'react-native';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}
export function HomeEmpty({loading, error, refetch}: Props) {
  let component = (
    <Text bold variant="paragraphMedium">
      Não há publicações no seu feed
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold variant="paragraphMedium" mb="s16">
          Não foi possível carregar o feed 😢
        </Text>
        <Button title="recarregar" variant="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
