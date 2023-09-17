import *as React from "react"
import {View,Text,Button,StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import StackNavigation from "./Navigation/StackNavigation";


export default class App extends React.Component{
 render(){
    return(
        <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    )
 }
    
}