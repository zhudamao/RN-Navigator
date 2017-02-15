/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    TouchableOpacity,
} from 'react-native';

import FirstCompent from './FirstCompent'

const url = 'https://unsplash.it/60/40/?random'

export default class navgator extends Component {
    render() {
        return (
            <Navigator
                initialRoute={
                {title: 'first', component: FirstCompent}
                }

                configureScene={
                    (route, routeStatck)=> {
                        if (route.sceneConfig)
                            return route.sceneConfig;
                        return Navigator.SceneConfigs.PushFromRight;
                    }
                }

                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navBarContainer}
                        routeMapper={routeMapper}
                    />
                }


                renderScene={
                    (route, navgator) => {
                        let Componet = route.component;

                        return <Componet  {...route.params} navigator={navgator}/>
                    }
                }
            >

            </Navigator>
        );
    }
}


const routeMapper = {
    LeftButton: (route, navigator, index, navState)=> {

        if (index != 0) {
            return (
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        navigator.pop()
                    }}
                >

                    <Image source={
                    {uri: url,}
                    }
                           style={styles.imageStyle}
                    />

                </TouchableOpacity>
            );

        }

    },
    Title: (route, navigator, index, navState)=> {

        if (index == 0) {
            return (
                <Text style={styles.navgationBarTitleStyle}>{route.title}</Text>
            );
        } else {
            return (
                <Text style={styles.detailTitleStyle}>{route.title}</Text>
            );
        }
    },
    RightButton: (route, navigator, index, navState)=> {
        if (index == 0) {
            return (<Text style={styles.detailTitleStyle}>{'right'} </Text>);
        } else {

        }
        ;
    }
};


const styles = StyleSheet.create({
    navBarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6900',
    },
    navgationBarTitleStyle: {
        color:  'white',
        fontSize: 20,

    },
    detailTitleStyle: {
        color: 'white',
        fontSize: 15,
    },
    imageStyle: {
        height: 40,
        width: 40,
        resizeMode: Image.resizeMode.cover,
        borderColor: '#ff8800',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 2,
        backgroundColor:'#666666'
    },

});

AppRegistry.registerComponent('navgator', () => navgator);
