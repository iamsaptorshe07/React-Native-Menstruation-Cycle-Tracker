import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

class Header extends React.Component{
    render()
    {
        return(
            <Appbar.Header style={{marginTop:30,backgroundColor:'white',shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 9,
            },
            shadowOpacity: 0.50,
            shadowRadius: 12.35,
            
            elevation: 19,}}>
                <Image source={require('../assets/girl.gif')} style={{ width: 50, height: 50 }} />
                <Appbar.Content title="Menstruation Cycle Tracker" titleStyle={{color:"#F86262",fontWeight:'bold',alignContent:'center'}}/>
            </Appbar.Header>
        )
    }
}

export default Header;