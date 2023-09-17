import *as React from "react"
import {View,Text,Button,StyleSheet,TouchableOpacity} from "react-native"

export default class HomeScreen extends React.Component{
render(){
    return(
        <View style={style.View}>

            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate("Donate")
            }}>
                <Text>Donate</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate("Recieve")}}>
                <Text> Recieve</Text>
            </TouchableOpacity>
        </View>
    )
}
    
}

const style=  StyleSheet.create({
    View:{flex:1,backgroundColor:"lightgreen"},
    TextInput:{width:20,height:20,alignSelf:"center",backgroundColor:"green"},
    TouchableOpacity:{borderRadius:50, backgroundColor:"lightblue", width:200, height:100},
    Text:{color:"Red", alignSelf:"center"}
})