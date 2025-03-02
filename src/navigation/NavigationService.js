//https://reactnavigation.org/docs/navigating-without-navigation-prop/
import * as React from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

const navigationRef = React.createRef();

const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
};

// Gets the current screen from navigation state
const getActiveRouteName = (state) => {
    const route = state.routes[state.index];
    if (route.state) {
        // Dive into nested navigators
        return getActiveRouteName(route.state);
    }

    return route.name;
};
const popToTop = () => {
    if (navigationRef.current?.canGoBack()) {
        navigationRef.current?.dispatch(StackActions.popToTop());
    }
};
const dispatch = (action) => {
    navigationRef.current?.dispatch(action);
};
const goBack = () => {
    if (navigationRef.current?.canGoBack()) {
        navigationRef.current?.dispatch(StackActions?.pop());
    }
};

const replace = (action, params) => {
    navigationRef.current?.dispatch(StackActions.replace(action, params));
};

//TODO this change is not require in this pr
const navigateReset = (index, actions) => {
    dispatch(
        CommonActions.reset({
            index: index,
            routes: actions
        })
    );
};
export { navigationRef, getActiveRouteName, navigate, popToTop, dispatch, goBack, navigateReset, replace };
