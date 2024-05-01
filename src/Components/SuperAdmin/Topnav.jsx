import React from "react";
import { Link } from 'react-router-dom';

function Topnav() {
    return (
  <>
      <div>
      <Link to="/login">login</Link>
      <br />
      <Link to="/signup">SingUp</Link>
      <br />
      <Link to="/forget_password">forget Password</Link>
      <br />
      <Link to="/reset_password">Reset Password</Link>
 
    </div>
  </>
    );
  };
  
  export default Topnav;

