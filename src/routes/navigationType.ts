import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './routes';
import {AuthStackParamList} from './AuthStack';
import {AppStackParamList} from './AppStack';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {AppTabBottomTabParamList} from './AppTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

export type AppTabScreenProps<
  Routename extends keyof AppTabBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, Routename>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;
