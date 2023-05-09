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
  const[ fdata, setFdata] = useState({
    name:'',
    phoneNumber:'',
    email:'',
    password:'',
    conPassword:'',
  
  })
  const [errormsg,setErrormsg] = useState(null);
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
          onChangeText={(text) => setFdata ({ ...fdata, name: text})}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email "
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFdata ({ ...fdata, email: text})}
        /> 
      
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number "
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFdata ({ ...fdata, phoneNumber: text})}
        /> 
      </View> 


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setFdata ({ ...fdata, password: text})}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setFdata ({ ...fdata, conPassword: text})}
        /> 
      </View> 

      <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("Home");
            if(fdata.name == '' || fdata.id == '' || fdata.email == '' ||
            fdata.phoneNumber == '' || fdata.password == '' || fdata.conPassword == ''
            ){
              setErrormsg("All fields are required");
              return;
            }else{
              if(fdata.password != fdata.conPassword){
                setErrormsg('Password does not same');
                return;
              }
              else{
                fetch('http://103.67.157.119/32/signup',{
                  method:'POST',
                  headers: {
                    'Content-Type':'application/json'
                  },
                  body: JSON.stringify(fdata)
                })
                  .then(res => res.json()).then(
                    data => {
                      console.log(data);
                    }
                  )
              }
            }
            }}>
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