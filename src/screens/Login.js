import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";




const Login =(props) =>{


  const [fdata, setFdata] = useState({
    email: '',
    password: ''
})

const [errormsg, setErrormsg] = useState(null);
    
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
          <Text style={{ fontSize: 50, color : "#FFA500"}}>Student Login </Text>
          



          <View style={styles.inputView}>
            
            <TextInput
              style={styles.TextInput}
              placeholder="Username/Email"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setFdata ({ ...fdata, email: text})}
            /> 
          </View> 

          <View style={styles.inputView}
          > 
            <TextInput
              style={styles.TextInput}
              placeholder="EnterPassword"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(text) => setFdata ({ ...fdata, password: text})}
            /> 
          </View> 

          <TouchableOpacity>
            <Text style={styles.forgot_button} onPress={() => {
            props.navigation.navigate("Forget_password");}}
            >Forgot Password?</Text> 
            </TouchableOpacity> 

          <TouchableOpacity style={styles.loginBtn } onPress={() => {
            props.navigation.navigate("Home");}}>
            <Text style={styles.loginText}>LOGIN</Text> 
            </TouchableOpacity> 
          
          <View>
            <TouchableOpacity>
            <Text style={styles.forgot_button} onPress={() => {
            props.navigation.navigate("Registration");
            if (fdata.email == '' || fdata.password == '') {
              setErrormsg('All fields are required');
              return;
          }
          else {
              fetch('http://10.0.2.2:3000/signin', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(fdata)
              })
                  .then(res => res.json()).then(
                      data => {
                          // console.log(data);
                          if (data.error) {
                              setErrormsg(data.error);
                          }
                          else {
                              alert('logged successfully');
                              navigation.navigate('homepage');
                          }
                      }
                  )
          }
          }}
            >Create An Account</Text> 
          </TouchableOpacity>

           </View>


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

  export default Login;

  
  
