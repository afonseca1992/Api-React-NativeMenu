
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {BuscarSuper} from "../Screens/BuscarSuper";

const Drawer = createDrawerNavigator();

export class DrawerDefaultNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Letras" component={BuscarSuper} />
            </Drawer.Navigator>
        );
    }
    
}
