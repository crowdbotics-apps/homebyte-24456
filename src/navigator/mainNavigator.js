import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile205408Navigator from '../features/UserProfile205408/navigator';
import UserProfile205298Navigator from '../features/UserProfile205298/navigator';
import Maps205279Navigator from '../features/Maps205279/navigator';
import Settings205257Navigator from '../features/Settings205257/navigator';
import Settings205242Navigator from '../features/Settings205242/navigator';
import NotificationList205241Navigator from '../features/NotificationList205241/navigator';
import Maps205240Navigator from '../features/Maps205240/navigator';
import Maps205222Navigator from '../features/Maps205222/navigator';
import Additem205221Navigator from '../features/Additem205221/navigator';
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
UserProfile205408: { screen: UserProfile205408Navigator },
UserProfile205298: { screen: UserProfile205298Navigator },
Maps205279: { screen: Maps205279Navigator },
Settings205257: { screen: Settings205257Navigator },
Settings205242: { screen: Settings205242Navigator },
NotificationList205241: { screen: NotificationList205241Navigator },
Maps205240: { screen: Maps205240Navigator },
Maps205222: { screen: Maps205222Navigator },
Additem205221: { screen: Additem205221Navigator },
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
