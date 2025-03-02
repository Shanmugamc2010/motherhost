import * as NavigationService from './../../navigation/NavigationService';

export const handleNavigation = (routeName, params) => {
    console.log('==> step 7');
    if (routeName) {
        if (params) {
            NavigationService.navigate(routeName, params);
        } else {
            NavigationService.navigate(routeName);
        }
    }
};