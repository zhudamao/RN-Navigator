/**
 * Created by zhudamao on 2017/2/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,

} from 'react-native';


export default class FirstCompent extends React.Component{
    static  defaultPops = {

    };

    constructor(props){
        super(props);
        this.state = {num:1,pushTimes:props.pushCount}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.pressAction}> {'this place' + Math.ceil(Math.random() *10)}</Text>
                <Text style={styles.welcome} onPress={this.callBackAction.bind(this)}> {'call back' + this.state.num}</Text>
            </View>
        )
    }

    pressAction = ()=> {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                title: 'second', component: FirstCompent, params: {
                    callBack:(current)=> {
                        navigator.pop();
                        this.state = {num:Math.ceil(100*current)}
                    },
                    pushTimes:Math.ceil(Math.random()*10),
        }
        })
        }

    }

    callBackAction(){
        const {callBack} = this.props;
        if (callBack)
            callBack(Math.random());
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});