import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps205217Navigator from '../features/Maps205217/navigator';
import UserProfile205213Navigator from '../features/UserProfile205213/navigator';
import Maps205173Navigator from '../features/Maps205173/navigator';
import Additem205172Navigator from '../features/Additem205172/navigator';
import Maps205168Navigator from '../features/Maps205168/navigator';
import UserProfile205164Navigator from '../features/UserProfile205164/navigator';
import Maps203875Navigator from '../features/Maps203875/navigator';
import Additem203874Navigator from '../features/Additem203874/navigator';
import Maps203870Navigator from '../features/Maps203870/navigator';
import UserProfile203866Navigator from '../features/UserProfile203866/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps205217: { screen: Maps205217Navigator },
UserProfile205213: { screen: UserProfile205213Navigator },
Maps205173: { screen: Maps205173Navigator },
Additem205172: { screen: Additem205172Navigator },
Maps205168: { screen: Maps205168Navigator },
UserProfile205164: { screen: UserProfile205164Navigator },
Maps203875: { screen: Maps203875Navigator },
Additem203874: { screen: Additem203874Navigator },
Maps203870: { screen: Maps203870Navigator },
UserProfile203866: { screen: UserProfile203866Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
