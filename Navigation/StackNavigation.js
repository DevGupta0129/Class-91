import *as React from "react"
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Screens/homeScreen'
import DonateDetails from "../Screens/DonateDetails";
import RecieveDetails from "../Screens/ReceiveDetails";

const Stack = createStackNavigator()

export default class StackNavigation extends React.Component{

  render(){
    return(
        <Stack.Navigation>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Donate" component={DonateDetails} />
          <Stack.Screen name="RecieveDetails" component={RecieveDetails}/>
        </Stack.Navigation>
    )
  }
   
}