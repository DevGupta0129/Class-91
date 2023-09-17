import *as React from "react"
import {View,Text,Button,StyleSheet,TextInput,TouchableOpacity} from "react-native"

export default class DonateDetails extends React.Component{
    render(){
        return(

            <View style={style.View}>

                <Text style={style.Text}>Donate Details</Text>
                <TextInput placeholder={"Type the title of your food"}/>
                <TextInput placeholder={"Type your food's length of life"}/>
                <TextInput style={style.TextInput} placeholder={"Type a brief description about your food here"} 
                multiline={true}
                numberOfLines={'20'}
                />
               
             <TouchableOpacity style={style.TouchableOpacity}>

                    <Text style={style.Text}>Sumbit</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
    
const style=  StyleSheet.create({
    View:{flex:1,backgroundColor:"yellow"},
    TextInput:{width:20,height:20,alignSelf:"center",backgroundColor:"green"},
    TouchableOpacity:{borderRadius:50},
    Text:{color:"Red"}
})