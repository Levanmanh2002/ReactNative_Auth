import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from './auth/AuthNavigator'
import MainNavigator from './main/MainNavigator'
import { UserContext } from "../UserContext";

export default function AppNavigator() {
    const {isSignedIn} = UserContext();

    return (
        <NavigationContainer>
            {isSignedIn ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}