//Create a MainPage and pass a value for isLoggedIn. If the value is "true" display the "Welcome" component. Else  "Login" component. Use ternary operator.
import React from "react";
import Login from "./Login";
import Welcome from "./Welcome";
function Mainpage({isLoggedIn}){
   return ( 
    <>
    {isLoggedIn? <Welcome/>: <Login/>}
    </>
);
}
export default Mainpage;
