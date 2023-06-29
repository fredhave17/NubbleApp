import {ScrollView, View} from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}
export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView
      style={{backgroundColor, flex: 1}}
      keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={{backgroundColor, flex: 1}}>{children}</View>;
}
