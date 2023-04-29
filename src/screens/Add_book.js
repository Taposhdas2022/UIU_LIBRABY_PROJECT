import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";



const Add_book=(props) =>{


   
    
    return (
        <View style={styles.container}>
          
          <StatusBar style="auto" />
          
          <Text style={{ fontSize: 40 }}>ADD BOOK</Text>

          <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Book Name "
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Department Name"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
        </View>  
        <TouchableOpacity style={styles.loginBtn } onPress={() => {
            props.navigation.navigate("");}}>
            <Text style={styles.loginText}>submit</Text> 
            </TouchableOpacity> 


          
     
          



        </View> 
      );
    }

    


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F2F3F4",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#93CCED",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    create_account: {
        height: 30,
        marginBottom: 30,
      },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FFA500",
    },
  });

  export default Add_book;

  
  
