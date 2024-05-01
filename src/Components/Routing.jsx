import React from 'react'
import {Routes, Route } from "react-router-dom";
import Superadminlogin from './SuperAdmin/login';
import Createsuperadmin from './SuperAdmin/signup';
import ForgetPassword from './SuperAdmin/Forget_password';
import Supresetpassword from './SuperAdmin/Reset_password';


const Routing = () => {
  return (

      <Routes>
        <Route path="/login" element={< Superadminlogin />} />
        <Route exact path="/signup" element={< Createsuperadmin />} />
        <Route exact path='/forget_password' element={< ForgetPassword />} />
        <Route exact path='/reset_password' element={< Supresetpassword />} />
      </Routes>
     
  )
}

export default Routing;