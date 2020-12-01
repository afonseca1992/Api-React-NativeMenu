import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import BuscarSuper from "../Screens/BuscarSuper";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(HomeScreen, BuscarSuper);
const Drawer = createDrawerNavigator();
export class DrawerCustomNavigator extends Component {
    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}/>}
                onLogout={() => this.setLogout()}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="BuscarSuper" component={BuscarSuper} />
            </Drawer.Navigator>
        );
    }
    
}