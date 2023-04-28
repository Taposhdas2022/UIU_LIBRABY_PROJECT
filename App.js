import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Registration from "./src/screens/Registration";
import Forget_password from "./src/screens/Forget_password";
import Search_book from "./src/screens/Search_book";
import Book_list from "./src/screens/Book_list";
import Borrow_book from "./src/screens/Borrow_book";
import Fpage from "./src/screens/Fpage";
import Admin_login from "./src/screens/Admin_login";
import Admin_registration from "./src/screens/Admin_registration";
import Admin_home from "./src/screens/Admin_home";
import Add_book from "./src/screens/Add_book";
import Delete_book from "./src/screens/Delete_book";
import Library_student from "./src/screens/Library_student";



const stack = createStackNavigator();

function App() {

  return(

    <NavigationContainer>
      <stack.Navigator>

      

        <stack.Screen name ="Fpage" component={Fpage}/>
        <stack.Screen name ="Login" component={Login}/>
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="Registration" component={Registration}/>
        <stack.Screen name="Forget_password" component={Forget_password}/>
        <stack.Screen name="Search_book" component={Search_book}/>
        <stack.Screen name="Book_list" component={Book_list}/>
        <stack.Screen name="Borrow_book" component={Borrow_book}/>
        <stack.Screen name ="Admin_login" component={Admin_login}/>        
        <stack.Screen name ="Admin_registration" component={Admin_registration}/>
        <stack.Screen name ="Admin_home" component={Admin_home}/>
        <stack.Screen name ="Add_book" component={Add_book}/>
        <stack.Screen name ="Delete_book" component={Delete_book}/>
        <stack.Screen name ="Library_student" component={Library_student}/>





        

        


        

       

        </stack.Navigator>
    </NavigationContainer>



  );



};
export default App;