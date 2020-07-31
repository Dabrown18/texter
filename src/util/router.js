import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import HomeScreen from '../containers/HomeContainer';
import MessageScreen from '../containers/MessageContainer';
import ProfileScreen from '../containers/ProfileContainer';

import FooterIcon from '../components/FooterIcon';

const HomeTab = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Message: {
    screen: MessageScreen
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
});

const ProfileTab = createStackNavigator({
  Profile: {
    screen: ProfileScreen
  }
},{
  headerMode: 'none',
    navigationOptions: {
    headerVisible: false
  }
});

const DashboardTabRoutes = createBottomTabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: () => {
      return {
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          return <FooterIcon tabBarIndex={0} isFocused={focused}/>
        }
      }
    }
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: () => {
      return {
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          return <FooterIcon tabBarIndex={1} isFocused={focused}/>
        }
      }
    }
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    showLabel: false,
    style: {
      height: 50,
      paddingVertical: 5,
      backgroundColor: '#FFFFFF'
    }
  }
});

export default createAppContainer(DashboardTabRoutes)
