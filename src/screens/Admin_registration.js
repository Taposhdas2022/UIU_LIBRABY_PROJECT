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
import { Header } from "react-native-elements";


const Admin_registration =(props) =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
                <Text style={{ fontSize: 50 , color : "#FFA500"}}>Admin</Text>
                <Text style={{ fontSize: 50 ,color : "#FFA500"}}>Registration</Text>
      
      <StatusBar style="auto" />
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Name"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="student ID "
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email "
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number "
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 

      <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("Admin_login");}}>
        <Text style={styles.loginText}>Registration</Text> 
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
export default Admin_registration;