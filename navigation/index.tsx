import {  NavigationContainer } from '@react-navigation/native';
import MainRoute from './MainRoute';

export type RootStackParamList = {
  Index: undefined;
};


export default function RootStack() {
  return (
    <NavigationContainer >
      <MainRoute/>
    </NavigationContainer>
  );
}
