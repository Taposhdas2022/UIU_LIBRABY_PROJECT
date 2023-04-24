import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Registration from "./src/screens/Registration";
import Forget_password from "./src/screens/Forget_password";
import Search_book from "./src/screens/Search_book";



const stack = createStackNavigator();

function App() {

  return(

    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name ="Login" component={Login}/>
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="Registration" component={Registration}/>
        <stack.Screen name="Forget_password" component={Forget_password}/>
        <stack.Screen name="Search_book" component={Search_book}/>

       

        </stack.Navigator>
    </NavigationContainer>



  );



};
export default App;