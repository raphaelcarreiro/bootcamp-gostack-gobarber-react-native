import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              style: {
                backgroundColor: '#8d41ab',
                inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
