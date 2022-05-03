import React from "react";
import { Link } from "react-router-dom";

import { LOGIN_PATH, SIGNUP_PATH } from "./Routes/RoutePath";


export default function Home() {
    return <div className="d-flex justify-content-center align-items-center">
            <img src='images/login.png' alt='login' className='authPicture' />
       <div className="d-flex flex-column">
           <label>Are you a new user? Please <Link to={SIGNUP_PATH}> Signup  </Link></label>
           <label>Existing user please<Link to={LOGIN_PATH}> Login  </Link></label>
       </div>
    </div>
}