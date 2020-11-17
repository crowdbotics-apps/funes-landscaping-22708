import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList174986Navigator from '../features/ArticleList174986/navigator';
import ArticleList174985Navigator from '../features/ArticleList174985/navigator';
import ArticleList174984Navigator from '../features/ArticleList174984/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList174986: { screen: ArticleList174986Navigator },
ArticleList174985: { screen: ArticleList174985Navigator },
ArticleList174984: { screen: ArticleList174984Navigator },

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
