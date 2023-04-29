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



const Home=(props) =>{


 
    
    return (
        <View style={styles.container}>
          
          <StatusBar style="auto" />
          <Image
            style={{
            resizeMode: 'cover',
            height: 200,
            width: 200,
          }}
          source={require('../../assets/uiu.png')}/>
          
          <Text style={{ fontSize: 50 , color : "#FFA500"}}>UIU LIBRARY</Text>
        
    


          <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("Book_list");}}>
            <Text style={styles.loginText}>BOOK LIST</Text> 
            </TouchableOpacity>  
            
            <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("Search_book");}}>
            <Text style={styles.loginText}>SEARCH BOOK</Text> 
            </TouchableOpacity> 

            <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("Borrow_book");}}>
            <Text style={styles.loginText}>BORROW BOOK LIST</Text> 
            </TouchableOpacity> 

            <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("Login");}}>
            <Text style={styles.loginText}>LOGOUT</Text> 
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
      marginBottom: 50,
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

  export default Home;

  
  
