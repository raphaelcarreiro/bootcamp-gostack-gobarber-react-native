import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';

const AppNavigator = createSwitchNavigator({
  SignIn,
  SignUp,
});

export default createAppContainer(AppNavigator);
