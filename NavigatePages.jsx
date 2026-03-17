import React from "react";
import { useNavigate } from "react-router-dom";

function NavigatePages(){
    const navigate = useNavigate();//any name instead of navigate can be given
    function handleNavigate(){  
     navigate('/about');
}
return <button onClick={handleNavigate}>Go to About</button>
    }
   export default NavigatePages;